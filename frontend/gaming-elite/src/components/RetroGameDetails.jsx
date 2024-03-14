import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import axios from "axios"
import RetroHeader from "./RetroHeader"
import RetroFooter from './RetroFooter'
import styles from '../style/RetroGameDetails.module.css'

export default function RetroGameDetails () {

  let { id } = useParams()
  const [game, setGame] = useState('')
  const location = useLocation()

  useEffect(() => {
    const getGame = async () => {
        const response = await axios.get(`http://localhost:3001/games/${id}`)
        setGame(response.data)
        console.log(response.data)
    }
    getGame()
}, [id])

const addToCart = async () => {
    try {
        if (userId) {
            await axios.post(`http://localhost:3001/users/${userId}/shopping-cart/items`, {
                itemId: game._id
            })
            alert("Item added to cart successfully!")
        } else {
            alert("Please log in to add items to the cart.")
        }
    } catch (error) {
        console.error('Error occurred while adding to cart:', error)
    }
}


const renderLogos = () => {
    if (!game.consoleId || game.consoleId.length === 0) return null

    return (
    <div className={styles.centeredContainer}>
        <div className={styles.logoContainer}>
            {game.consoleId.map(id => {
                switch(id) {
                    case '65ee24dce1aef071e5d7668f':
                        return (
                            <div key={id}>
                                <img className={styles.pcLogo} src='https://anlucas.neocities.org/win98_89.gif' alt="Windows 98" />
                                <img className={styles.pcLogoApple} src='https://anlucas.neocities.org/apple.gif' alt="Apple" />
                            </div>
                        )
                    case '65eb6b07c8b65edfb58066e3':
                        return <img className={styles.playstation} key={id} src='https://cdn.iphoneincanada.ca/wp-content/uploads/2019/04/PlayStation-Logo.png' alt="PlayStation" />
                    case '65ee2bd3c6a5308ebee04e2e':
                        return <img className={styles.nintendo} key={id} src='https://cdn.optipic.io/site-105077/media/com_eshop/categories/resized/NES%20Logo-210x145.png' alt="Nintendo" />
                    case '65f05f9bc0643c7f97323f3b':
                        return <img className={styles.atari} key={id} src='https://logoblink.com/static/85f986d0cdd759a866810b5829d9c91c/b0544/atari-logo.webp' alt="Atari" />
                    default:
                        return null
                }
            })}
        </div>
    </div>
    )
}

return(
    <body className={styles.retroGameDetailsBody}>
        <div className={styles.retroDetailsCard}>
            {location.pathname.startsWith("/retro/") && <RetroHeader />}
            <h1 className={styles.retroGameTitle}>{game.title}</h1>
            <img className={styles.gameCover} src={game.img_path} alt="" />
            {renderLogos()}
            <h3 className={styles.retroYear}> Release Year: {game.year_released}</h3>
            <h3 className={styles.retroGenre}> Genres {game.genre}</h3>
            <img className={styles.ratingImg} src={game.rating_img} alt=''/>
            <h2 className={styles.retroPrice}> ${game.price}</h2>
            <h2 className={styles.retroGameDescription}> Description {game.description}</h2>
            <h3 className={styles.retroNumberOfPlayers}> Number of Players: {game.number_of_players}</h3>
            <h3 className={styles.retroOnline}> Online capabilities: {game.online}</h3>
            <button className={styles.addToCart} onClick={addToCart}>Add to Cart</button>
            <Link className={styles.returnLink} to="/retro"> Pixelate! </Link>
        
        </div>
            {location.pathname.startsWith("/retro/") && <RetroFooter />}
    </body>
)
}