const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const Accessory = new Schema(
    {
        name:{type: String, required: true},
        year_established: {type: Number, required: true},
        country: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports =  Accessory
