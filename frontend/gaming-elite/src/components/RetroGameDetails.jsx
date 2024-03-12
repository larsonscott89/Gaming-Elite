import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/GameDetails.css'

export default function RetroGameDetails () {

  let { id } = useParams()
  const [game, setGame] = useState('')

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

return(
    <div className="details-card">
  <h1>{game.title}</h1>
  <img className='game-cover' src={game.img_path} alt="" />
  <h3> Release Year: {game.year_released}</h3>
  <h3> Genres {game.genre}</h3>
  <img className='rating-img' src={game.rating_img} alt=''/>
  <h2> ${game.price}</h2>
  <h2> Description {game.description}</h2>
  <h3> Number of Players: {game.number_of_players}</h3>
  <h3> Online capabilities: {game.online}</h3>
  <button onClick={addToCart}>Add to Cart</button>
</div>
)
}
