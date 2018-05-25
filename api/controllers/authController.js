const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema');
const bcrypt = require('bcrypt');

const tokenExpTime = { expiresIn: '24h'};
const salt = 10;

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
        jwt.sign(userData, process.env.JWT_SECRET, tokenExpTime, (err, token)=>{
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
  const reqEmail = req.body.email
  const reqPassword = req.body.password

  if(reqEmail === '' || reqPassword === ''){
    res.status(400).json({message: "Email or password can not be empty."})
  } else{
    User.findOne({email: reqEmail})
      .exec()
      .then( user =>{
        if(user){
          res.status(400).json({message: "Email already taken"})
        } else{
          bcrypt.hash(reqPassword, salt)
            .then( hash =>{
              User.create({
                email: reqEmail,
                password: hash,
              })
                .then( result =>{
                  console.log(result)
                  const userData = {
                    id: result._id,
                    role: result.role,
                  }
                  jwt.sign(userData, process.env.JWT_SECRET, tokenExpTime, (err, token)=>{
                    if(err){ res.status(400).json({message: 'Error createing user'})}
                    res.status(201).json({
                      message: 'User Created',
                      token: token,
                      id:result._id})
                  })
                })
                .catch( error =>{
                  console.log(error)
                  res.status(401).json({message: "Unable to create user"})
                })
            })
            .catch( error =>{
              console.log("error creating hash password")
            })
        }
      })
  }
}

