//npm run server
import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from 'cors'
import authRoutes from './routes/authRoute.js'
// env configure
dotenv.config();

// Create an express app
const app = express()


//db connect
connectDB();

//middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth/", authRoutes);


// Define a port using the environment variable or default to 8000
const PORT = process.env.PORT || 8080;

// Define a development mode using the environment variable or default to 'development'
const DEV_MODE = process.env.NODE_ENV || 'development';

// Define a simple route
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Ecommerce Clothing Website using MERN stack</h1>");
});

// Listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running in ${DEV_MODE} mode on port ${PORT}`);
});
