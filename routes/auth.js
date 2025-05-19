const express =require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
require("dotenv").config(); 
const sendEmail= require('../Utils/email')
const crypto = require ('crypto');

const JWT_SECRET = process.env.JWT_SECRET;

router.post('/register', async (req,res)=>{
    try{


    const {name ,email , phone, password ,role}=req.body;
    if(role==='admin'){
        return res.status(403).json({message:'Unauthorized role assignment'});
    }

    const exitingUser =  await User.findOne({email});
    if(exitingUser){
       return res.status(400).json({message:"User already exists"});
    }
    const hashedPassword = await bcrypt.hash( password.trim() , 10 ); 


    const newRegister = new User({
        name,
        email,
        phone,
        password : hashedPassword,
        role: role || 'user'

    })
    await newRegister.save();

    return res.status(201).json({message:"User Created successfully"});
}catch (err){
    res.status(500).json({ message: 'Server error' });


}

});



router.post('/login', async (req,res)=>{
    try{


    const {email , password }=req.body;

    const user =  await User.findOne({email});
    if(!user){
       return res.status(400).json({message:'Invalid credentials'});
    }


    const isMatch = await bcrypt.compare(password ,user.password);
    if(!isMatch){
        return res.status(400).json({message:'Invalid credentials'});
    }
     const token = jwt.sign({id: user._id,
        role: user.role} ,
        JWT_SECRET ,
        {expiresIn : '1d'});


        res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role    
            }
          });
          

}catch (err){
    res.status(500).json({ message: 'Server error' });

}

});



router.post('/forgetPassword', async (req, res, next) => {
  try {
    // Validate email input
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
      });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No user found with this email',
      });
    }

    // Generate reset token and save user
    const resetToken = user.createResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // Construct reset URL
    const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetPassword/${resetToken}`;
    const message = `We have received a password reset request. Please use the link below to reset your password:\n\n${resetUrl}\n\nThis link will expire in 10 minutes.`;

    try {
      // Send email
      await sendEmail({
        email: user.email,
        subject: 'Password Reset Request',
        message,
      });

      return res.status(200).json({
        success: true,
        message: 'Password reset link sent to email',
      });
    } catch (emailError) {
      // Clear token and expiration on email failure
      user.passwordResetToken = undefined;
      user.passwordResetTokenExpires = undefined;
      await user.save({ validateBeforeSave: false });

      console.error('Email sending failed:', emailError);
      return res.status(500).json({
        success: false,
        message: 'Failed to send password reset email. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Error in forgetPassword route:', error);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
});



 router.patch('/resetPassword/:token', async (req, res) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetTokenExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Token is invalid or has expired',
      });
    }

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.passwordResetToken = undefined;
    user.passwordResetTokenExpires = undefined;

    await user.save(); 

    const loginToken = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token: loginToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error('Error in resetPassword:', err);
    res.status(500).json({ message: 'Server error' });
  }
});
  

  
    



module.exports=router;