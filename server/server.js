const http = require('http')
const express = require('express');
const cors= require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv')
dotenv.config()

const db = require('./configs/db')
const initializePassport = require('./configs/passport')
const globalErrorMiddleware = require('./middlewares/globalError')

// Routes

const authRoutes = require('./routes/AuthRoutes');
const userRoutes = require('./routes/UserRoutes');
<<<<<<< HEAD
const customerRoutes = require('./routes/customerRoutes');
const inventoryRoutes = require('./routes/InventoryRoutes');

=======
const supplierRoutes = require('./routes/SupplierRoutes');
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e
const initializeSocketServer = require('./socket');


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
app.use('/api/v1/users',userRoutes)
<<<<<<< HEAD
app.use('/api/v1/customers',customerRoutes)
app.use('/api/v1/inventory',inventoryRoutes)

=======
app.use('/api/v1/suppliers',supplierRoutes)
>>>>>>> 4a830426f014bdb8c86efac960530d2aedc5141e



app.use(globalErrorMiddleware)

// Socket server

const httpServer = http.createServer(app)

initializeSocketServer(httpServer)

// Server Start

const PORT = process.env.PORT || 5000;



httpServer.listen(PORT,()=>{
    console.log(`Server is Listening At Port ${PORT}`)
})


process.on("unhandledRejection",(err)=>{
    console.log("Unhandeled Promise Rejection Occurs",err)
})




