const {Games} = require('../models')

const getRetro = async (req, res) => {
  try {
    const retro = await Retro.find()
    res.json(retro)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getRetro
}