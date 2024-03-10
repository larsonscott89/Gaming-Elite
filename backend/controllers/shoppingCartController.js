const { ShoppingCart } = require('../models')

const getShoppingCarts = async (req, res) => {
    try {
        const shoppingCarts = await ShoppingCart.find().populate()
        res.json(shoppingCarts)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getShoppingCartById = async (req,res) => {
    try {
        const shoppingCart = await ShoppingCart.findById(req.params.id).populate()
        if (shoppingCart) {
            res.json(shoppingCart)
        }
    } catch (error) {
        return res.status(500).send('Collection with the specified ID does not exists');
    }
}

const getUserShoppingCart = async (req,res) => {
    try {
        const shoppingCart = await ShoppingCart.findOne({user: [req.params.id]})
        res.json(shoppingCart)
    } catch (e) {
        return res.status(500).send('Collection with the specified ID does not exists');
    }
}

const createShoppingCart = async (req,res) => {
    try {
        const shoppingCart = await new ShoppingCart(req.body)
        await shoppingCart.save()
        return res.status(201).json({
            shoppingCart,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateShoppingCart = async (req, res) => {
    try {
        let { id } = req.params;
        let shoppingCart = await ShoppingCart.findByIdAndUpdate(id, req.body, { new: true })
        if (shoppingCart) {
            return res.status(200).json(shoppingCart)
        }
        throw new Error("ShoppingCart not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteShoppingCart = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ShoppingCart.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("ShoppingCart deleted");
        }
        throw new Error("ShoppingCart not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getShoppingCarts,
    getShoppingCartById,
    getUserShoppingCart,
    createShoppingCart,
    updateShoppingCart,
    deleteShoppingCart,
}