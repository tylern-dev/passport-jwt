const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../api/models/UserSchema');
const bcrypt = require('bcrypt');

passport.use(new LocalStrategy({
  usernameField: "email",
  session: false
},
  function(email, password, done) {
    console.log('email',email)
    User.findOne({ email: email })
      .exec()
      .then( (user)=>{
        if(!user){
          console.log( 'NO USER EXISTS')
          return done(null, false, {message: 'email or password does not match'})
        } else {
          bcrypt.compare(password, user.password)
            .then( result =>{
              if(result){
                return done(null, user)
              }
              else{
                return done(null, false, {message: 'email or password does not match'})
              }
            })
            .catch(err =>{
              console.log('error with bcrypt',err)
            })
        }
      })
      .catch( err =>{
        console.log(err)
      })
  }
))




