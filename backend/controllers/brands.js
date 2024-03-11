const {Brands} = require('../models')

const createBrand = async (req, res) => {
  try {
    const brand = await new Brands(req.body)
    await brand.save()
    return res.status(201).json({
        user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const getBrand = async (req, res) => {
  try {
    const brand = await Brands.find()
    res.json(brand)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBrandById = async (req,res) => {
  try {
      const brand = await Brands.findById(req.params.id).populate()
      if (brand) {
          res.json(brand)
      }
  } catch (error) {
      return res.status(500).send('Collection with the specified ID does not exists');
  }
}

const updateBrand = async (req, res) => {
  try {
    let { id } = req.params
    let brand = await Brands.findByIdAndUpdate(id, req.body, { new: true})
    if (brand) {
      return res.status(200).json(brand)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteBrand = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await Brands.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Brand deleted")
      }
      throw new Error("Brand not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports = {
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrandById
}