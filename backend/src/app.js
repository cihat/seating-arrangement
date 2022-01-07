const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
  
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const mongooseConnection = require('./database-connection')
const Student = require('./models/Student')

const indexRouter = require('./routes/index')
const studentsRouter = require('./routes/students')
const librariesRouter = require('./routes/libraries')

require('./database-connection')

const app = express()

//* Authentication
app.use(
  session({
    store: new MongoStore({
      mongooseConnection,
      stringify: false,
    }),
    secret: 'thisissupposedtobesecret',
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: process.env.NODE_ENV === 'production' && 'none',
      secure: process.env.NODE_ENV === 'production',
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(Student.createStrategy())
passport.serializeUser(Student.serializeUser())
passport.deserializeUser(Student.deserializeUser())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/students', studentsRouter)
app.use('/libraries', librariesRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
/* eslint-disable-next-line */
app.use((err, req, res, next) => {
  const error = {
    status: err.status || 500,
    message: err.message,
  }

  if (req.app.get('env') === 'development') {
    error.stack = err.stack
  }

  res.status(error.status)

  res.send(error)
})

module.exports = app
