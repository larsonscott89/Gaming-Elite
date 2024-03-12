import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/GameDetails.css'

export default function GameDetails ({ userId }) {

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
        <div className="game-details-page">
            <div className="game-details-container">
                <div className="top-container">
                    <div className="image-container">
                        <img className='game-cover' src={game.img_path} alt="" />
                    </div>
                    <div className="details-section">
                        <h2 className="game-title">{game.title}</h2>
                        <h2 className="game-price"> ${game.price}</h2>
                        <h3 className="game-release">Release Year: <span className="year-released">{game.year_released}</span></h3>
                        <h3 className="genres-title">Genres</h3>
                        <h3 className="game-genres">{game.genre}</h3>
                        <img className='rating-img' src={game.rating_img} alt=''/>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                </div>
                <div className="description-container">
                    <h3 className="description-title">Description</h3>
                    <h4 className="game-description">{game.description}</h4>
                    <h3 className="general-title">General</h3>
                    <h4 className="game-playres"> Number of Players: <span className="player-number">{game.number_of_players}</span></h4>
                    <h4 className="game-online"> Online capabilities: <span className="online-boolean">{game.online}</span></h4>
                </div>
            </div>
        </div>
    )
}