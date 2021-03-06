const express = require('express');
const passport = require('passport');

const {registerUser, loginUser, getUserFromToken} = require('../controllers/AuthController')
const {authJWT} = require("../middlewares/auth")

const authRoutes = express.Router();


authRoutes.route("/register-user").post(registerUser)
authRoutes.route("/login-user").post(loginUser)
authRoutes.route('/me').get(passport.authenticate('jwt',{session:false}),getUserFromToken)



module.exports = authRoutes;