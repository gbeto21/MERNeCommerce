import express from "express"
const router = express.Router()
import {
  authUser,
  getUserProfile,
  createUser,
  updateUserProfile,
} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

router.post("/login", authUser)
router.post("/", createUser)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)

export default router
