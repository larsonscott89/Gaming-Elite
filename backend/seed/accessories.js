const db= require('../db/index')
const {Accessory}= require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const accessories=[
            {
                name: 'Sony Vertical stand for PlayStation',
                type: 'Cases & Stands',
                price:29.99,
                image:'https://media.gamestop.com/i/gamestop/20009375/Sony-Vertical-Stand-for-PlayStation-5-Console?$pdp2x$'

            },
            {
                name: 'PowerA Protection Case for Nintendo Switch',
                type:'Cases & Stands',
                price:22.99,
                image:'https://media.gamestop.com/i/gamestop/20010305?$pdp2x$'

            }  ,
            {
                name: 'PDP Overnight Case GLOW for Nintendo Switch/Lite/OLED - Kart Drift',
                type:'Cases & Stands',
                price:29.99,
                image:'https://media.gamestop.com/i/gamestop/20006168/PDP-Overnight-Case-GLOW-for-Nintendo-Switch/Lite/OLED---Kart-Drift?$pdp2x$'

            },
            {
                name: 'Sony PlayStation 5 DualSense Charging Station',
                type: 'Chargers & Cables',
                price:29.99,
                image:'https://media.gamestop.com/i/gamestop/11106283/Sony-PlayStation-5-DualSense-Charging-Station?$pdp2x$'

            },  
            {
                name: 'GameStop Universal 6ft AC Power Cord for PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X',
                type:'Chargers & Cables',
                price:7.99,
                image:'https://media.gamestop.com/i/gamestop/11204301/GameStop-Universal-6ft-AC-Power-Cord-for-PlayStation-4-PlayStation-5-Xbox-One-and-Xbox-Series-X?$pdp2x$'

            },
            {
                name: 'Universal USB-C Charge Cable',
                type:'Chargers & Cables',
                price:1.99,
                image:'https://media.gamestop.com/i/gamestop/10160078/USB-C-Charge-Cable-for-Nintendo-Switch?$pdp2x$'

            },
            {
                name: 'PowerA Pink Lemonade Enhanced Wired Controller for Xbox Series X and S',
                type: 'Controllers',
                price:37.99,
                image:'https://media.gamestop.com/i/gamestop/11185567/PowerA-Pink-Lemonade-Enhanced-Wired-Controller-for-Xbox-Series-X-and-S?$pdp2x$'

            },
            {
                name: 'Sony DualSense Wireless Controller for PlayStation 5 - White',
                type: 'Controllers',
                price: 69.99,
                image:'https://media.gamestop.com/i/gamestop/11106262/Sony-DualSense-Wireless-Controller-for-PlayStation-5?$pdp2x$'

            },
            {
                name: 'Sony DualSense Edge Wireless Controller for PlayStation 5',
                type: 'Controllers',
                price:199.99,
                image:'https://media.gamestop.com/i/gamestop/20003160?$pdp2x$'

            },
            {
                name: 'Seagate Storage Expansion Card 1TB for Xbox Series X/S',
                type: 'Memory',
                price:149.99,
                image:'https://media.gamestop.com/i/gamestop/11108384/Seagate-1TB-Storage-Expansion-Card-for-Xbox-Series-X/S?$pdp2x$'

            },
            {
                name: 'Astro Gaming A10 Gen 2 Wired Headset for PlayStation 5, Xbox Series X/S, and PC',
                type: 'Gaming_Headsets',
                price: 59.99,
                image:'https://media.gamestop.com/i/gamestop/11184368_black?$pdp2x$'

            },
    ]
    await Accessory.insertMany(accessories)
    console.log("Created some accessories!")
}
const run = async () => {
    await main()
    db.close()
}

run()
