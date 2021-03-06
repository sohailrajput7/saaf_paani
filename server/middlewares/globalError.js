const APIError = require('../utils/APIError')

module.exports = (err,req,res,next)=>{
    console.log("================= GLOBAL ERROR MIDDLEWARE =================")

    err = new APIError(err.message,err.statusCode || 500)

    return res.status(err.statusCode).json({
        status:"failed",
        message:err.message
    })
}