const {Accessory}= require('../models')


const getAccessory = async (req, res) => {
    try {
        const Accessories = await Accessory.find().populate()
        res.json(Accessories)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getAccessoryById = async (req,res) => {
    try {
        const Accessory = await Accessory.findById(req.params.id).populate()
        if (Accessory) {
            res.json(Accessory)
        }
    } catch (error) {
        return res.status(500).send('Collection with the specified ID does not exists');
    }
}


const createAccessory = async (req,res) => {
    try {
        const Accessory = await new Accessory(req.body)
        await Accessory.save()
        return res.status(201).json({
            Accessory,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateAccessory = async (req, res) => {
    try {
        let { id } = req.params;
        let Accessory = await Accessory.findByIdAndUpdate(id, req.body, { new: true })
        if (Accessory) {
            return res.status(200).json(Accessory)
        }
        throw new Error("Accessory not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteAccessory = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Accessory.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Accessory deleted");
        }
        throw new Error("Accessory not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAccessory,
    getAccessoryById,
    createAccessory,
    updateAccessory,
    deleteAccessory,
}