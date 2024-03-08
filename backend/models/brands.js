const mongoose = require('mongoose')

const brandsSchema = new mongoose.Schema(
    {
        name:{type: String, required: true},
        year_established: {type: Number, required: true},
        country: {type: String, required: true}
    }
)

module.exports = mongoose.model('Brands', brandsSchema)