const db= require('../db/index')
const {BannerAd}= require('../models')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const bannerAds=[
        {
            image_path: "https://media.gamestop.com/i/gamestop/Clearance_WK01-06_1736x96_Skinny_Blade_D.webp",
            size: "small"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/SSG_Spend250Save25_EG_1736x96_Skinny_Blade_v2_D_1.webp",
            size: "small"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/PS5SlimHardwareAwareness_WK51-04_1736x224_Full_Blade_D.webp",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/MarioSwitchOled_WK36_1736x224_Full_Blade_D.webp",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/ShopXBSXandS_1736x224_Full_Blade_D_1.webp",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/HiddenGems_WK34_CTA_1736x224_Full_Blade_D.webp",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/Save30SelectPlayStationVG_WK05-07_1736x224_Full_Blade_D_GREY.png",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/HiddenGems_WK39_CTA_1736x224_Full_Blade_D.webp",
            size: "medium"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/SSG_Spend250Save25_EG_1760x400_Hero_D.webp",
            size: "large"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/PSDeepEarthCont_NA_ALL_WK40-48_1760x400_Hero_D.webp",
            size: "large"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/XB_DreamVaporController_NA_WK01-09_1760x400_Hero_D.webp",
            size: "large"
        },
        {
            image_path: "https://media.gamestop.com/i/gamestop/NSWAccy_WK04_1760x400_Hero_D.webp",
            size: "large"
        }

    ]
    await BannerAd.insertMany(bannerAds)
    console.log("Created some bannerAds!")
}
const run = async () => {
    await main()
    db.close()
}

run()