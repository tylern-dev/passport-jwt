const express = require('express');
const tokenController = require('../controllers/tokenController');
const authCheck = require('../middleware/authCheck')
const router = express.Router();



module.exports = router;