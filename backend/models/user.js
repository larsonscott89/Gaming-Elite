const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const User = new Schema(
    {
        username:{type: String, required: true},
        password: {type: String, required: true}
    }
)

module.exports =  User