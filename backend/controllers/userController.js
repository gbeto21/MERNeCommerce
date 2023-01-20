import asyncHandler from "express-async-handler"
import generateToken from "../utils/generateToken.js"
import User from "../models/userModel.js"

// @desc    Auth user & get token
// @route   POST /users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  const passwordMatch = await user.matchPassword(password)
  if (user && passwordMatch) {
    const token = generateToken(user._id)
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    })
  } else {
    res.status(401)
    throw new Error("Invalid email or password.")
  }
})

// @desc    Auth user & get token
// @route   POST /users/login
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id
  const user = await User.findById(req.user._id)
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})
export { authUser, getUserProfile }
