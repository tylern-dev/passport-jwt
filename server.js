require('dotenv').config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'))

// db connection
require('./config/dbConnection')(mongoose);


//route imports
// const userRoutes = require('./api/routes/userRoutes');
// const tokenRoutes = require('./api/routes/tokenRoutes');
const authRoutes = require('./api/routes/authRoutes');

//routes
// app.use('/apiUser', userRoutes);
// app.use('/apiToken', tokenRoutes)
app.use('/authRoute', authRoutes)


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From my Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/client/public/index.html'));
})


app.listen(PORT, ()=> {
  console.log(`App running on port ${PORT}`)
})