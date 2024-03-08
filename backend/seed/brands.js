const db= require('../db/index')
const Brand= require('../models/brands')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const brands=[
        {
            name:'Sony',
            year_established: 1946,
            country: 'Japan',
        },
        {
            name:'Nintendo',
            year_established: 1889,
            country: 'Japan',
        },
        {
            name:'Microsoft',
            year_established: 1975,
            country: 'United States of America',
        },
        {
            name:'Sega',
            year_established: 1960,
            country: 'Japan',
        },
        {
            name:'Atari',
            year_established: 1972,
            country: 'United States of America',
        },

    ]
    await Brand.insertMany(brands)
    console.log("Created some brands!")
}
const run = async () => {
    await main()
    db.close()
}

run()
