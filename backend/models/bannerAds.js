const mongoose = require('mongoose')


const bannerAdSchema = new mongoose.Schema(
    {
        image_path: {type: String, required: true},
        size: {type: String, required: true}
    },
    { timestamps: true }
)

module.exports = mongoose.model('BannerAd', bannerAdSchema)
