const { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        name: { type: String, required: true },
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        shoppingCart_id: { type: Schema.Types.ObjectId, ref: 'ShoppingCart', required: true },
        quantity: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = CartItem