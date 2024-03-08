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
app.get('/users', userController.getUser)

// read
app.get('/brands', brandController.getBrand)
app.get('/consoles', consoleController.getConsole)
app.get('/games', gameController.getGame)

// update
app.get('/users', userController.updateUser)

// delete
app.get('/users', userController.deleteUser)