import jwt from "jsonwebtoken"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"

const protect = asyncHandler(async (req, res, next) => {
  let token
  const authorization = req.headers.authorization
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id).select("-password")
      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("Not authorized, token failed")
    }
  }
  if (!token) {
    res.status(401)
    throw new Error("No authorized")
  }
})

export { protect }
