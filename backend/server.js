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
app.post('/users', userController.getUser)
app.post('/users', userController.userSignup)
app.post('/users', userController.userLogin)

// read
app.get('/brands', brandController.getBrand)
app.get('/consoles', consoleController.getConsole)
app.get('/games', gameController.getGame)


// update
app.put('/users', userController.updateUser)

// delete
app.delete('/users', userController.deleteUser)