const express = require('express')
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser')
const products = require('./routes/products')
const { connectDatabase } = require('./config/config');
const ErrorHandler = require('./utils/errorHandler')

connectDatabase();

app.use(bodyParser());
app.use('/api/v1', products);


app.use((err, req, res, next) => {
  let error = { ...err }

  error.message = err.message;

  // Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid: ${err.path}`
    error = new ErrorHandler(message, 400)
  }

  // Handling Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message);
    error = new ErrorHandler(message, 400)
  }

  // Handling Mongoose duplicate key errors
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`
    error = new ErrorHandler(message, 400)
  }

  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Internal Server Error'
  })

})

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})