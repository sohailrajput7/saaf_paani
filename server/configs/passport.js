const passport  = require('passport');
const passportJWT = require('passport-jwt')
const User = require('../models/User')

const JWTStrategy = passportJWT.Strategy
const extractJWT = passportJWT.ExtractJwt
const jwtStrategyOptions ={
    jwtFromRequest:extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:process.env.JWT_SECRET_KEY.toString()
}

module.exports = function initializePassport(){
    passport.use(new JWTStrategy(jwtStrategyOptions,async (jwtPayload,done)=>{
        try {
            const user = await User.findOne({id:jwtPayload.sub})

            if(!user) return done(new APIError(400,"User does not exists"))

            return done(null,user)
            
        } catch (error) {
            return done(new APIError(401,"Please login to continue"),false)
        }
    }))

}