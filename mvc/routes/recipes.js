import express from "express"
import { verifyTokenAndAuthorize } from "../controllers/verifyToken.js"
import { getAllRecipes, getRecipe, postRecipe } from "../controllers/recipes.js"

const router = express.Router()

router.post("/",verifyTokenAndAuthorize,postRecipe);
router.get("/",verifyTokenAndAuthorize,getRecipe);
router.get("/all",getAllRecipes);

export default router;