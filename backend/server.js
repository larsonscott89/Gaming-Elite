const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const gameController = require('./controllers/games')
const consoleController = require('./controllers/consoles')
const brandController = require('./controllers/brands')
const userController = require('./controllers/user')

const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// create
app.post('/users/signup', userController.userSignup)
app.post('/users/login', userController.userLogin)
app.post('/users', userController.createUser)

// read
app.get('/brands', brandController.getBrand)
app.get('/consoles', consoleController.getConsole)
app.get('/games', gameController.getGame)
app.get('/users', userController.getUser)

// update
app.put('/users', userController.updateUser)

// delete
app.delete('/users', userController.deleteUser)