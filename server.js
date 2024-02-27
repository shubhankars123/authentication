import express from "express";
import dotenv from "dotenv"
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors'


//configure env
dotenv.config()

//database config
connectDB()

// rest object
const app = express()

// middleware configuration
app.use(cors()) // this is because while connecting backend to frontend, it should not throw any error
app.use(express.json()) // earlier we were using body-parser
app.use(morgan('dev'))

// routes 
app.use(`/api/v1/auth`, authRoutes);

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to ecommerce app</h1>`)
})



// run listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on PORT ${process.env.PORT}`)
})
