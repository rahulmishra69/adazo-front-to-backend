const User = require("../model/user");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const sendToken = require("../utils/jwttoken");
const bcrypt = require("bcrypt");

// Register User
const registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  sendToken(user, 201, res);
});

// Login User

const LoginUser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given email or password
  if (!email || !password) {
    return next(new ErrorHandler("Plase enter email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email", 401));
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(new ErrorHandler("Invalid Password"));
    }
  }
  sendToken(user, 200, res);
});

// get user details

const getUserdetails = catchAsyncError(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ id: id });
  if (!user) {
    return next(new ErrorHandler("not details here", 400));
  }
  res.status(200).json({ success: true, user });
});

// Logout User

const LogoutUser = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({ success: true, message: "logged out user" });
});

module.exports = {
  registerUser,
  LoginUser,
  LogoutUser,
  getUserdetails
};
