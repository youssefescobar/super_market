const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {
    try {
        const { name, email,phone , password ,role} = req.body; 
        // Hash password securely
        const hashedPassword = await bcrypt.hash(password.trim(), 10);

        // Create new user
        const newUser = new User({ name: name.trim(),
             email: email.trim(),
             phone, 
             password: hashedPassword ,
             role:role||'user'
    });

        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        console.error('Create User Error:', error);
        res.status(500).json({message:error.message});
    }
 
};

exports.getUser = async (req,res,next) => {
    try {
        const userId =req.params.id;

        const users =await User.findById(userId);
        if(!users){
            return res.status(404).json({ message: "User not found" });

        }
        res.json(users);
 
       
    } catch (error) {
        res.status(500).json({message:error.message});
    }

};

exports.updateUser = async(req, res ,next )=>{
    try {
        const updateData= { ...req.body };
        if(updateData.password){
           updateData.password = await bcrypt.hash(updateData.password.trim(), 10);

        }
        const updatedUser= await User.findByIdAndUpdate(
            req.params.id,
            updateData,
            {new:true,runValidators:true}
        );

        if(!updatedUser){
            return res.status(404).json({ message: "User not found" });
        }
        res.status(201).json({message:"User updated successfully", updateData }  );
       

       
    } catch (error) {
        res.status(500).json({message:error.message});
        }
 
};
exports.deleteUser = async(req, res ,next )=>{
    try {
        const deletedUser= await User.findByIdAndDelete(req.params.id)
        if(!deletedUser){
            return res.status(404).json({ message: "User not found" });
        }
       
        res.status(201).json({message:"User deleted successfully"});
      

       
    } catch (error) {
        res.status(500).json({message:error.message});
        }
 
};

exports.changeUserRole = async (req, res, next) => {
    try {
        const { id } = req.params;  
        const { role } = req.body;  

        // Ensure the role is either 'admin' or 'user'
        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role value' });
        }

        // Find the user by ID
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user's role
        user.role = role;
        await user.save();

        return res.status(200).json({ message: 'User role updated successfully', user });
    } catch (err) {
        next(err);  // Pass the error to the error-handling middleware
    } 
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password -passwordResetCode -passwordResetCodeExpires');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateMyProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, email, phone } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email: email });
            if (existingUser && existingUser._id.toString() !== userId) {
                return res.status(409).json({ message: 'Email is already in use by another account.' });
            }
            user.email = email;
        }

        if (phone && phone !== user.phone) {

            const existingUser = await User.findOne({ phone: phone });
            
            if (existingUser && existingUser.phone && existingUser._id.toString() !== userId) {
                return res.status(409).json({ message: 'Phone number is already in use by another account.' });
            }
            user.phone = phone;
        }

        if (name) {
            user.name = name;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            phone: updatedUser.phone,
        });

    } catch (error) {
        console.error(`Error updating user profile: ${error.message}`);
        if (error.code === 11000) {
             return res.status(409).json({ message: 'A profile with the provided email or phone already exists.' });
        }
        res.status(500).json({ message: 'Server error while updating profile.' });
    }
};