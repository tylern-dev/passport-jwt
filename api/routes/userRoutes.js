const express = require('express');
const User = require('../models/UserSchema');
// const userController = require('../controllers/userController');
// const authCheck = require('../middleware/authCheck');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/profile', authController.user_profile )

module.exports = router;
