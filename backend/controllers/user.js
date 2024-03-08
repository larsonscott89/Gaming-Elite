const User = require('../models/user')

const userSignup = async (req, res) => {
  try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
          return res.status(400).json({ message: 'Username already exists' });
      }
      const newUser = new User({ username,  password });
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create user' });
  }
};
const userLogin = async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }
      if (user.password !== password) {
          return res.status(401).json({ message: 'Invalid credentials' });
      }
      res.json({ message: 'Login successful' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to authenticate user' });
  }
}

const getUser = async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
        user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

  const updateUser = async (req, res) => {
    try {
      let { id } = req.params
      let user = await User.findByIdAndUpdate(id, req.body, { new: true})
      if (user) {
        return res.status(200).json(user)
      }
    } catch (e) {
      return res.status(500).json({ error: error.message})
    }
  }

  const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Ingredient deleted")
        }
        throw new Error("User not found")
    } catch (error) {
        return res.status(500).send(error.message)
    }
  }

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userSignup,
  userLogin
}