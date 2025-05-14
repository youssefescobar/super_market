const express =require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
require("dotenv").config(); 
const sendEmail= require('../Utils/email')

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
    let user;
  
    try {
      user = await User.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      const resetToken = user.createResetPasswordToken();
      await user.save({ validateBeforeSave: false });
  
      const resetUrl = `${req.protocol}://${req.get('host')}/api/auth/resetPassword/${resetToken}`;
      const message = `We have received a password reset request. Please use the link below to reset your password:\n\n${resetUrl}\n\nThis link will expire in 10 minutes.`;
  
      await sendEmail({
        email: user.email,
        subject: "Password Reset Request",
        message,
      });
  
      // ✅ Final response (after sending email)
      return res.status(200).json({
        success: true,
        message: "Password reset link sent to email",
        resetToken, // Optional: remove in production for security
      });
  
    } catch (error) {

      if (user) {
        user.passwordResetToken = undefined;
        user.passwordResetTokenExpires = undefined;
        await user.save({ validateBeforeSave: false });
      }
      console.error('Error in forgetPassword route:', error);
      return res.status(500).json({ message: 'Server error' },error);
    }
  });
  router.patch('/resetPassword', async (req ,res)=>{
    try{

    }catch(err){

    }
  })
  

  
    



module.exports=router;