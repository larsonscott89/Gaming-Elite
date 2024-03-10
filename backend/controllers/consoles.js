const {Consoles} = require('../models')

const getConsole = async (req, res) => {
  try {
    const console = await Consoles.find()
    res.json(console)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getConsole,
}