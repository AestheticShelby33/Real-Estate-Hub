import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.error("Error connecting to DB", err);
})

const app=express();

const port =3000;

app.use(express.json());

app.use('/api/users', userRouter);

app.listen(port, ()=>{
    console.log('Server is running on port', port );
});
