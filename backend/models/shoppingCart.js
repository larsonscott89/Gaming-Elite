const { Schema } = require('mongoose')

const ShoppingCart = new Schema(
    {
        total_price: { type: Number, required: true },
        user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    { timestamps: true },
)

module.exports = ShoppingCart