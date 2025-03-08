import express from "express"
import mongoose from "mongoose"
import userRouter from "./mvc/routes/user.js";
import recipesRouter from "./mvc/routes/recipes.js"

const app = express();

app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log("Server started")
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("connected to database"))
    .catch(() => console.log("error connecting to database"))
})

app.use("/users",userRouter);
app.use("/recipes",recipesRouter);