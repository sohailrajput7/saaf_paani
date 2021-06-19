const http = require('http')
const express = require('express');
const cors= require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv')
dotenv.config()

const db = require('./configs/db')
const initializePassport = require('./configs/passport')
const globalErrorMiddleware = require('./middlewares/globalError')

// Routes

const authRoutes = require('./routes/AuthRoutes');
const userRoutes = require('./routes/UserRoutes');
const customerRoutes = require('./routes/customerRoutes');
const inventoryRoutes = require('./routes/InventoryRoutes');
const supplierRoutes = require('./routes/SupplierRoutes');
const conversationRoutes = require('./routes/ConversationRoutes')
const initializeSocketServer = require('./socket');


db();
initializePassport()

// Express App

const app = express()



// Middlewares

app.use(morgan("tiny"))
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static(`${__dirname}/uploads`))


// Routes

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/customers',customerRoutes)
app.use('/api/v1/inventory',inventoryRoutes)
app.use('/api/v1/suppliers',supplierRoutes)
app.use('/api/v1/conversations',conversationRoutes)



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




