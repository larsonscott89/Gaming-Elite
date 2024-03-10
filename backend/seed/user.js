const db= require('../db/index')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const user =[{
      username: 'slarson',
      password: '7u8j9kolI!'
}]
    await User.insertMany(user)
    console.log("Created some Games!")
}
const run = async () => {
    await main()
    db.close()
}

run()