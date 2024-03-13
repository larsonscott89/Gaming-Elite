const { CartItem, ShoppingCart } = require('../models')

const getCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.find().populate()
        res.json(cartItems)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getCartItemById = async (req,res) => {
    try {
        const cartItem = await CartItem.findById(req.params.id).populate()
        if (cartItem) {
            res.json(cartItem)
        }
    } catch (error) {
        return res.status(500).send('Cart Item with the specified ID does not exists');
    }
}

const getCartItemsInShoppingCart = async (req,res) => {
    try {
        const shoppingCart = await ShoppingCart.findOne({user: [req.params.id]})
        const cartItems = await CartItem.find({shoppingCart_id: shoppingCart._id})
        console.log(cartItems)
        res.json(cartItems)
    } catch (e) {
        return res.status(500).send('Cart Items with the specified ID does not exists');
    }
}

const createCartItem = async (req,res) => {
    try {
        const cartItem = await new CartItem(req.body)
        await cartItem.save()
        return res.status(201).json({
            cartItem,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateCartItem = async (req, res) => {
    try {
        let { id } = req.params;
        let cartItem = await CartItem.findByIdAndUpdate(id, req.body, { new: true })
        if (cartItem) {
            return res.status(200).json(cartItem)
        }
        throw new Error("CartItem not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await CartItem.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("CartItem deleted");
        }
        throw new Error("CartItem not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const addItem = async (req, res) => {
    const { userId } = req.params;
    console.log(userId)
  const { name, price, quantity } = req.body;
  try {
    const newItem = new CartItem({ name, price, quantity, user: userId });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
}
const getItem= async (req, res) => {
    try {
        const items = await CartItem.find();
        res.json(items);
      } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cart items' });
      }
    };




module.exports = {
    getCartItems,
    getCartItemById,
    getCartItemsInShoppingCart,
    createCartItem,
    updateCartItem,
    deleteCartItem,
    getItem,
    addItem
}