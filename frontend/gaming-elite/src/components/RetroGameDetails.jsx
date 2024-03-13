import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import axios from "axios";
import RetroHeader from "./RetroHeader";
import RetroFooter from './RetroFooter'
import styles from '../style/RetroGameDetails.module.css'

export default function RetroGameDetails () {

  let { id } = useParams()
  const [game, setGame] = useState('')
  const location = useLocation();

  useEffect(() => {
    const getGame = async () => {
        const response = await axios.get(`http://localhost:3001/games/${id}`)
        setGame(response.data)
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

return(
    <body>
        <div className={styles.retroDetailsCard}>
            {location.pathname.startsWith("/retro/") && <RetroHeader />}
            <h1>{game.title}</h1>
            <img className={styles.gameCover} src={game.img_path} alt="" />
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
