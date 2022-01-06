/* eslint-disable no-console */
const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/seating-arrangement'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection established.🚀'))
  .catch(console.log)

module.exports = mongoose.connection
