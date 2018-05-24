const passport = require('passport');
const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');

const expTime = { expiresIn: '24h'}

exports.user_login = (req, res, next) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: info ? info.message : 'Login failed',
          user: user
        });
      }
      req.login(user, { session: false }, (err) => {
        if (err) { res.send(err) }
        const userData = {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role
        }
        // asycnronous
        jwt.sign(userData, process.env.JWT_SECRET, expTime, (err, token)=>{
          if(err) {
            res.status(400).json({message: 'error creating auth token'})
          } else {
            res.status(200).json({ level: userData.role, token: token })
          }
        })
      })
    })
  (req, res);
}

exports.user_signup = (req, res, next) => {

}

exports.user_profile = (req, res, next) => {
  console.log('req user',req.userDecode)
  res.json({message: 'ok'})
}