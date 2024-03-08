const db= require('../db/index')
const Console= require('../models/consoles')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const consoles=[

    ]
    await Console.insertMany(consoles)
    console.log("Created some Consoles!")
}
const run = async () => {
    await main()
    db.close()
}

run()
