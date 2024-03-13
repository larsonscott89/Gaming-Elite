const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const Accessory = new Schema(
    {
        name:{type: String, required: true},
        price: {type: Number, required: true},
        image: {type:String, required: false},
        type:{type:String, required: false},
    },
    { timestamps: true }
)

module.exports =  Accessory
