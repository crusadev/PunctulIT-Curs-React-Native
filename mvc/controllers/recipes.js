import { User } from "../models/User.js";
import { Recipe } from "../models/Recipe.js";

export const postRecipe = async (req,res) => {
    try{
        const userId = req.user._id;
        const user = await User.findById(userId);
        if(!user){
            throw Error("User doesnt exist")
        }
        const recipe = {
            author:userId,
            ...req.body,
            mainIamge:"gol",
        }
        const creating_recipe = new Recipe(recipe);
        const created_recipe = await creating_recipe.save();
        await user.updateOne({
            $push:{
                recipes:created_recipe._id
            }
        })
        res.status(200).json({
            ...created_recipe._doc,
            __v:null
        })
    }catch(error){
        res.status(400).json(error.message)
    }
}

export const getRecipe = async (req,res) => {
    try{
        const recipeId = req.query.recipeId;
        const recipe = await Recipe.findById(recipeId).select({__v:0});
        if(!recipe){
            throw Error("Reteta nu a fost gasita")
        }
        res.status(200).json(recipe)
    }catch(err){
        res.status(404).json(err.message)
    }
}

export const getAllRecipes = async (req,res) => {
    try{
        const page = req.query.page || 0
        const size = req.query.size || 5
        const search = req.query.search

        let filter = {};
        if(search){
            filter.$text = {
                $search:search
            }
        }
        
        const recipes = await Recipe.find(filter).skip(page*size).limit(size)
        const numberRecipes = await Recipe.find(filter).countDocuments();
        const totalPagination = Math.ceil(numberRecipes / size);

        res.status(200).json({recipes,totalPagination,numberRecipes})
    }catch(err){
        res.status(404).json(err.message)
    }
}
