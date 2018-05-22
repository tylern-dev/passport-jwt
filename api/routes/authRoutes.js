const express = require('express');
const passport = require('passport')
const User = require('../models/UserSchema');
const authController = require('../controllers/authController');
// const authCheck = require('../middleware/authCheck');
const authCheck = require('../passportMiddleware/passportAuth');

const router = express.Router();

router.post('/login',  authCheck,  authController.user_login )

module.exports = router;