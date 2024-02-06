import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import myuserrouter from './routes/user.route.js'
import User from "./model/user.model.js";
dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected');
}).catch((err)=>{
    console.log(err);
})
app.listen(3000,()=>{
    console.log('Server is runnning on port 3000');
})
app.use('/api/user',myuserrouter);