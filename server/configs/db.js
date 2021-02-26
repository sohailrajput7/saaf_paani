const mongoose = require('mongoose');

const startDatabase = async ()=>{
    try {
        const dbConnection =  await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Database Server is connected");

    } catch (error) {
        console.log("There is some error connecting to database",error)    
    }
}


module.exports = startDatabase
