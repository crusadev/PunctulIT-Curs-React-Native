import express from "express"
import { registerUser,loginUser,getUser } from "../controllers/user.js"
import { verifyTokenAndAuthorize } from "../controllers/verifyToken.js"

const router = express.Router()

router.post("/login",loginUser)
router.post("/register",registerUser)
router.get("/",verifyTokenAndAuthorize,getUser);

export default router;