const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const Consoles = new Schema(
    {
        brandId: {type: mongoose.Schema.Types.ObjectId, ref: 'Brands'},
        name:{type: String, required: true},
        brand: {type: String, required: true},
        year_released: {type: Number, required: true},
        price: {type: Number, required: true},
        img_path: {type: String, reequred: true}
    }
)

module.exports = Consoles
