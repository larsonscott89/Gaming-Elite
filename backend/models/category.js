
const { Schema } = require('mongoose')


const Category = new Schema({
    name: { type: String, required: true },
    description: { type: String }
});

module.exports = Category

