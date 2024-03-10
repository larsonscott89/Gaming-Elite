const db= require('../db/index')
const {Games}= require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {

    const games=[

    ]

    await Games.insertMany(games)
    console.log("Created some Games!")
}
const run = async () => {
    await main()
    db.close()
}

run()
