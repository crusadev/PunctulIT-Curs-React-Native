import mongoose from "mongoose"
const Schema = mongoose.Schema

const RecipeSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:[true,"Lipseste autorul"],
        immutable:true
    },
    name:{
        type:String,
        required:[true,"Completati numele"]
    },
    category:{
        type:String,
        required:[true,"Completati categoria"]
    },
    complexity:{
        type:String,
        required:[true,"Completati complexitatea"]
    },
    time:{
        type:String,
        required:[true,"Completati timpul de preparare"]
    },
    ingredients:{
        type:[Schema.Types.Mixed],
        required:[true,"Lipsesc ingrediente"]
    },
    mainImage:{
        type:String,
        required:[true,"Atasati imaginea principala"]
    },
},{timestamps:true})

RecipeSchema.index({ name: 'text',category: "text"});

export const Recipe = mongoose.model("Recipe",RecipeSchema);