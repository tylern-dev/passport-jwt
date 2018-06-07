const express = require('express');
const passport = require('passport')
const User = require('../models/UserSchema');
const authController = require('../controllers/authController');
const authCheck = require('../../authMiddleware/jwtAuth');

const router = express.Router();

router.get('/validateToken', authCheck, authController.validate_token)
router.post('/login', authController.user_login );
router.post('/signup', authController.user_signup );
router.put('/changePassword', authCheck, authController.user_changePassword);



module.exports = router;