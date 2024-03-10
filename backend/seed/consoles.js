const db= require('../db/index')
const {Consoles }= require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    try {
    const consoles=[
        {
            
            brandId: '65eb6498f6c5cff3af5f2e0e',
            name: 'Xbox 360',
            brand: 'Microsoft',
            year_released: 2005,
            price: 150,
            img_path: 'https://target.scene7.com/is/image/Target/GUEST_11fa4d20-1c35-4cbe-89b5-f7a4e724723d?wid=488&hei=488&fmt=pjpeg'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0e',
            name: 'Xbox One',
            brand: 'Microsoft',
            year_released: 2013,
            price: 199.99,
            img_path: 'https://media.gamestop.com/i/gamestop/10115705?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0e',
            name: 'Xbox',
            brand: 'Microsoft',
            year_released: 2001,
            price: 50,
            img_path: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Xbox-Console-wDuke-L.jpg'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0e',
            name: 'Xbox Series X/S',
            brand: 'Microsoft',
            year_released: 2020,
            price: 250,
            img_path: 'https://media.gamestop.com/i/gamestop/11108371?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'Nintendo DS',
            brand: 'Nintendo',
            year_released: 2004,
            price: 75,
            img_path: 'https://dodo.ac/np/images/3/3d/Nintendo-ds-original.png'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'Nintendo Switch',
            brand: 'Nintendo',
            year_released: 2017,
            price: 250,
            img_path: 'https://media.gamestop.com/i/gamestop/11095819?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'GameBoy Advance',
            brand: 'Nintendo',
            year_released: 2001,
            price: 100,
            img_path: 'https://media.gamestop.com/i/gamestop/10131382/Nintendo-Game-Boy-Advance-SP-Graphite?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'Nintendo 3DS',
            brand: 'Nintendo',
            year_released: 2011,
            price: 100,
            img_path: 'https://retrovgames.com/wp-content/uploads/2021/12/71csjpn1arl._sl1500_-1.jpg'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'Gamecube',
            brand: 'Nintendo',
            year_released: 2001,
            price: 50,
            img_path:'https://media.gamestop.com/i/gamestop/10036647/Nintendo-Game-Cube-GameStop-Premium-Refurbished-Styles-May-Vary?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0d',
            name: 'Wii',
            brand: 'Nintendo',
            year_released: 2006,
            price: 100,
            img_path: 'https://i5.walmartimages.com/seo/Nintendo-Wii-Console-White-used_6ab585e1-ee74-4221-a372-90b247f7f20d.dddd533a3cdcbeeb72cb67adcfb08ba5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0c',
            name: 'Playstation 2',
            brand: 'Sony',
            year_released: 2000,
            price: 100,
            img_path: 'https://i5.walmartimages.com/seo/Sony-PlayStation-2-Console_30c1cd7a-596d-4093-889a-d035088ad3f6.ba9c7d418544161579051465ff93d795.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0c',
            name: 'Playstation 4',
            brand: 'Sony',
            year_released: 2013,
            price: 100,
            img_path: 'https://media.gamestop.com/i/gamestop/10114375/Sony-PlayStation-4-500GB-Console-Black?$pdp2x$'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0c',
            name: 'Playstation',
            brand: 'Sony',
            year_released: 1994,
            price: 100,
            img_path: 'https://i5.walmartimages.com/seo/Restored-Sony-PlayStation-1-Console-Refurbished_0064527a-5484-4282-b3a4-7e83e3f9c6d3.4c7170e3ee39c53d56a3d497587f5275.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0c',
            name: 'Playstation 3',
            brand: 'Sony',
            year_released: 2006,
            price: 100,
            img_path: 'https://retrovgames.com/wp-content/uploads/2022/05/ps3slim2-e1677085623252.webp'
        },
        {
            brandId: '65eb6498f6c5cff3af5f2e0c',
            name: 'Playstation 5',
            brand: 'Sony',
            year_released: 2020,
            price: 400,
            img_path: 'https://i5.walmartimages.com/seo/Sony-PlayStation-5-PS5-Video-Game-Console_31f85ee4-b291-463b-8b7b-84d8ec11de02.d1b082af4e01399dbcb01d83341df923.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF'
        },




    ]
    await Consoles.insertMany(consoles)
    console.log("Created some Consoles!")
}catch (err) {
    console.error('Error inserting category:', err);
}
};
const run = async () => {
    await main()
    db.close()
}

run()
