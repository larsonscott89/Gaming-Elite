const Games = require('../models/games')

const createGame = async (req, res) => {
  try {
    const game = await new Games(req.body)
    await game.save()
    return res.status(201).json({
        user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const getGame = async (req, res) => {
  try {
    const games = await Games.find()
    res.json(games)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateGame = async (req, res) => {
  try {
    let { id } = req.params
    let game = await Games.findByIdAndUpdate(id, req.body, { new: true})
    if (game) {
      return res.status(200).json(game)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteGame = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Games.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Game deleted")
      }
      throw new Error("Game not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}


module.exports = {
  getGame,
  createGame,
  updateGame,
  deleteGame
}