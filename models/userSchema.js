const mongoose =require('mongoose');
const crypto =require('crypto');
const { type } = require('os');

 const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required :true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    },
    passwordResetToken:{
       type: String,
    },
    passwordResetTokenExpires:{
        type: Date ,
     }


 },{timestamps:true}); 
 userSchema.methods.createResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex'); 
    // Hash the token and store it
    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  
    // Token valid for 10 minutes
    this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;
  
    console.log('Raw Token:', resetToken);
    console.log('Hashed Token:', this.passwordResetToken);
  
    return resetToken;
  };

 const User = mongoose.model("User",userSchema);
 module.exports = User;