import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../style/GameDetails.css'

export default function GameDetails ({ user_id }) {

    let { id } = useParams()
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getGame = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/games/${id}`)
                setGame(response.data)
               
                setLoading(false)
            } catch (error) {
                setError(error.message || 'Error fetching game details')
                setLoading(false)
            }
        }
        getGame()
    
    }, [id])
  
    const addToCart = async () => {
        try {

            if (user_id) {
                await axios.post(`http://localhost:3001/users/${user_id}/cart`, {
                    name: game.title,
                    price: game.price,
                    quantity: 1
                });
                alert("Item added to cart successfully!");

            } else {
                alert("Please log in to add items to the cart.");
            }
        } catch (error) {
            console.error('Error occurred while adding to cart:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(

        <div className="game-details-page">
            <div className="promo-container">
                <h4 className="promo-text">Save 10% When You Buy $250+ In Store or Online</h4>
            </div>
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
                    <div className="general-container">
                        <h3 className="general-title">General</h3>
                        <div className="general-info-container">
                            <div className="general-info">
                                <h4 className="game-players"> Number of Players</h4>
                                <hr/>
                                <h4 className="game-online">Online Multiplayer</h4>
                                <hr/>
                            </div>
                            <div className="general-data">
                                <h4 className="player-number">{game.number_of_players}</h4>
                                <hr/>
                                <div>
                                    {game.online ? (
                                        <h4 className="online-boolean">Yes</h4>
                                    ):
                                    <h4 className="online-boolean">No</h4>}
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}