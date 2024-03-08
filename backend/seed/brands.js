const db= require('../db/index')
const Brand= require('../models/brands')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const brands=[
        {
            name:'Sony',
            year_established: 1946,
            country: 'Japan'
        }
    ]
    await Brand.insertMany(brands)
    console.log("Created some brands!")
}
const run = async () => {
    await main()
    db.close()
}

run()
