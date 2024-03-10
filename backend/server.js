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
app.post('/games', gameController.createGame)
app.post('/brands', brandController.createBrand)
app.post('/consoles', consoleController.createConsole)

// read
app.get('/brands', brandController.getBrand)
app.get('/consoles', consoleController.getConsole)
app.get('/games', gameController.getGame)
app.get('/users', userController.getUser)

// update
app.put('/users', userController.updateUser)
app.put('/games', gameController.updateGame)
app.put('/brands', brandController.updateBrand)
app.put('/consoles', consoleController.updateConsole)

// delete
app.delete('/users', userController.deleteUser)
app.delete('/games', gameController.deleteGame)
app.delete('/brands', brandController.deleteBrand)
app.delete('/consoles', consoleController.deleteConsole)