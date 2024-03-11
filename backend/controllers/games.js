const {Games} = require('../models')

const getGame = async (req, res) => {
  try {
    const games = await Games.find()
    res.json(games)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}


module.exports = {
  getGame,
}