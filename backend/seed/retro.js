const db= require('../db/index')
const Retro = require('../models/Retro')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const retro = [

    {
    consoleId: [ '65f05f9bc0643c7f97323f3b' ],
    title: "Asteroids",
    genre:[ 'Arcade' ],
    year_released: 1981,
    description: "Your spaceship is trapped in a deadly asteroid belt. You will have to destroy the drifting asteroid boulders before they destroy your spaceship. But, watch out for enemy spacecraft. Fire your missiles to destroy the boulders and the enemy.",
    img_path: "https://gamefaqs.gamespot.com/a/box/5/8/6/586_front.jpg",
    number_of_players: '1',
    online: false,
    price: 4.99,
    rating: "M",
},
]

    await Retro.insertMany(retro)
    console.log("Created some Games!")
}
const run = async () => {
    await main()
    db.close()
}

run()