const BannerAd = require('../models/bannerAds')


const getBannerAds = async (req, res) => {
  try {
    const bannerAds = await BannerAd.find()
    res.json(bannerAds)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getBannerAds
}