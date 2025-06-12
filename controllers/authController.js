const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../Utils/email'); 
const { passwordResetCodeMessage } = require('../Utils/messagesTemplates');
const JWT_SECRET = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    if (role === "admin")
      return res.status(403).json({ message: "Unauthorized role assignment" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role: role || "user",
    });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "7d", 
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "No user found with this email" });

    const code = user.generatePasswordResetCode();
    await user.save({ validateBeforeSave: false });

    await sendEmail({
      email: user.email,
      subject: "Your Password Reset Code",
      message: passwordResetCodeMessage(code), // HTML content
    });

    res.status(200).json({ message: "Reset code sent to email" });
  } catch (err) {
    console.error("Forget Password Error:", err);
    res.status(500).json({ message: "Failed to send reset code" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    const user = await User.findOne({
      email,
      passwordResetCode: code,
      passwordResetCodeExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired code" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.passwordResetCode = undefined;
    user.passwordResetCodeExpires = undefined;

    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};
