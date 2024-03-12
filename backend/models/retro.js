const mongoose = require('mongoose')
const { Schema } = require("mongoose");


const Retro = new Schema(
    {
        consoleId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Consoles'} ],

    }
)

module.exports = Retro
