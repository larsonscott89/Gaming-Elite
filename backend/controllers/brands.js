const Brands = require('../models/brands')

const getBrand = async (req, res) => {
  try {
    const brands = await Brands.find()
    res.json(brands)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getBrand,
}