const { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        name: String,
        price: Number,
        quantity: Number,
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        shoppingCart_id: { type: Schema.Types.ObjectId, ref: 'ShoppingCart', required: true },
        
    },
    { timestamps: true },
)

module.exports = CartItem