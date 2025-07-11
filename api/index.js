import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.error("Error connecting to DB", err);
})

const app=express();

const port =3000;

app.use(express.json());



app.listen(port, ()=>{
    console.log('Server is running on port', port );
});

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});