const express = require('express');
const User = require('../models/UserSchema');
const userController = require('../controllers/userController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();


module.exports = router;
