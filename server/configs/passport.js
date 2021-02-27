const passport  = require('passport');
const passportJWT = require('passport-jwt')
const User = require('../models/User')
const APIError = require('../utils/APIError')

const JWTStrategy = passportJWT.Strategy
const extractJWT = passportJWT.ExtractJwt
const jwtStrategyOptions ={
    jwtFromRequest:extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET_KEY
}

module.exports = function initializePassport(){
    passport.use(new JWTStrategy(jwtStrategyOptions,async (jwtPayload,done)=>{
        try {
            console.log(jwtPayload)
            const user = await User.findById(jwtPayload.id)
            console.log("user",user)
            if(!user) return done(new APIError(400,"User does not exists"),false)

            return done(null,user)
            
        } catch (error) {
            return done(new APIError(401,"Please login to continue"),false)
        }
    }))

}