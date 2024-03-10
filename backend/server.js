const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const gameController = require('./controllers/games')
const consoleController = require('./controllers/consoles')
const brandController = require('./controllers/brands')
const userController = require('./controllers/user')
const { getCartItems, getCartItemById, createCartItem, updateCartItem, deleteCartItem, getCartItemsInShoppingCart } = require('./controllers/cartItemController');
const { getShoppingCarts, getShoppingCartById, createShoppingCart, updateShoppingCart, deleteShoppingCart, getUserShoppingCart } = require('./controllers/shoppingCartController');
const { getAccessory, getAccessoryById, createAccessory, updateAccessory, deleteAccessory} = require('./controllers/accessoryController');
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
app.get('/users/:id', userController.getUserById)


app.post('/users/signup', userController.userSignup)
app.post('/users/login', userController.userLogin)


// read
app.get('/brands', brandController.getBrand)
app.get('/consoles', consoleController.getConsole)
app.get('/games', gameController.getGame)
app.put('/users/:id/update', userController.updateUser)

// delete
app.delete('/users/:id/delete', userController.deleteUser)

//shoppingcart
app.get('/shoppingCarts', getShoppingCarts)
app.post('/shoppingCarts/create', createShoppingCart)
app.get('/shoppingCarts/:id', getShoppingCartById)
app.put('/shoppingCarts/:id/update', updateShoppingCart)
app.delete('/shoppingCarts/:id/delete', deleteShoppingCart)

//accessories
app.get('/accessories', getAccessory)
app.post('/saccessories/create', createAccessory)
app.get('/accessories/:id', getAccessoryById)
app.put('/accessories/:id/update', updateAccessory)
app.delete('/accessoriess/:id/delete', deleteAccessory)

//shoppingcart items
app.get('/cartItems', getCartItems)
app.post('/cartItems/create', createCartItem)
app.get('/cartItems/:id', getCartItemById)
app.put('/cartItems/:id/update', updateCartItem)
app.delete('/cartItems/:id/delete', deleteCartItem)
//user shopping cart and items
app.get('/users/:id/shopping-cart', getUserShoppingCart);
app.get('/users/:id/shopping-cart/items', getCartItemsInShoppingCart)

//handle 404 error
app.get('/*', async (req,res) => {
  res.send('An error has occurred. Try again later (404)')
})

