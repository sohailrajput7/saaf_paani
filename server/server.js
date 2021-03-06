const express = require('express');
const cors= require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
dotenv.config()

const db = require('./configs/db')
const initializePassport = require('./configs/passport')
const globalErrorMiddleware = require('./middlewares/globalError')

// Routes

const authRoutes = require('./routes/AuthRoutes')


db();
initializePassport()

// Express App

const app = express()



// Middlewares

app.use(morgan("tiny"))
app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/uploads`))


// Routes

app.use('/api/v1/auth',authRoutes)




app.use(globalErrorMiddleware)


// Server Start

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is Listening At Port ${PORT}`)
})


process.on("unhandledRejection",(err)=>{
    console.log("Unhandeled Promise Rejection Occurs",err)
})




