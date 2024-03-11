const mongoose = require('mongoose')
const { Schema } = require("mongoose");

const BannerAd = new Schema(
    {
        image_path: {type: String, required: true},
        size: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports =  BannerAd
