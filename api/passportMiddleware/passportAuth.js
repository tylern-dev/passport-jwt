const passport = require('passport');
const jwt = require('passport-jwt');
const localStrategy = require('passport-local')
const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/UserSchema')

module.exports = () =>{
  passport.authenticate('jwt', {session: false})
}

