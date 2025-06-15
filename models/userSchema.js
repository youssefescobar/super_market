const mongoose = require("mongoose");
const crypto = require("crypto");
const { type } = require("os");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    stripeCustomerId: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    passwordResetCode: String,
    passwordResetCodeExpires: Date,
    confirmPassword: {
      type: String,
    },
  },
  { timestamps: true }
);
userSchema.methods.generatePasswordResetCode = function () {
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
  this.passwordResetCode = code;
  this.passwordResetCodeExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
  return code;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
