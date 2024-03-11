const {Consoles} = require('../models')

const createConsole = async (req, res) => {
  try {
    const console = await new Consoles(req.body)
    await console.save()
    return res.status(201).json({
        user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const getConsole = async (req, res) => {
  try {
    const console = await Consoles.find()
    res.json(console)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getConsoleById = async (req,res) => {
  try {
      const console = await Consoles.findById(req.params.id).populate()
      if (console) {
          res.json(console)
      }
  } catch (error) {
      return res.status(500).send('Collection with the specified ID does not exists');
  }
}

const updateConsole = async (req, res) => {
  try {
    let { id } = req.params
    let console = await Consoles.findByIdAndUpdate(id, req.body, { new: true})
    if (console) {
      return res.status(200).json(console)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteConsole = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Consoles.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Console deleted")
      }
      throw new Error("Console not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}
const searchConsole = async (req, res) => {
  try {
    const searchTerm = req.query.search;

    const consoles = await Console.find(); // Use the appropriate method to fetch console data from your database
    // Filter the consoles based on the search term
    const filteredConsoles = consoles.filter(console => console.name.toLowerCase().includes(searchTerm.toLowerCase()));

    res.json(filteredConsoles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getGameConsoleById = async (req,res) => {
  try {
      const console = await Consoles.findById(req.params.id).populate()
      if (console) {
          res.json(console)
      }
  } catch (error) {
      return res.status(500).send('Collection with the specified ID does not exists');
  }
}

module.exports = {
  getConsole,
  createConsole,
  updateConsole,
  deleteConsole,
  getConsoleById,
  searchConsole,
  getGameConsoleById
}