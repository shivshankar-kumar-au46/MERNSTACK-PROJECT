//const express = require('express'); // this is traditional way of importing express
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")))

    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"));
    })
}

//OrqJaxsDjT10xZAA

app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at http://localhost:${PORT}`);
})