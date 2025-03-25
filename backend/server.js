//const express = require('express'); // this is traditional way of importing express
import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); //allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

//OrqJaxsDjT10xZAA

app.listen(PORT,()=>{
    connectDB();
    console.log(`server started at http://localhost:${PORT}`);
})