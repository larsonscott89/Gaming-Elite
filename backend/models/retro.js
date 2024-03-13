const mongoose = require('mongoose')
const Schema = require("mongoose");


const Retro = new mongoose.Schema(
    {
        consoleId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Consoles'} ],
        title:{type: String, required: true},
        genre:[ {type: String, required: true} ],
        year_released: {type: Number, required: true},
        description: {type: String, required: true},
        img_path: {type: String, required: true},
        number_of_players: {type: String, required: true},
        online: {type: Boolean, default: false},
        price: {type: Number, required: true},
        rating: {type: String, required: true},
        rating_img: {type:String, required: false}
    }
)

module.exports = mongoose.model('Retro', Retro)
