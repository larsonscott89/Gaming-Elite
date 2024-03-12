import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../style/Retro.css'

export default function Retro () {

  let { id } = useParams()
  const [game, setGame] = useState('')
  const [consoles, setConsoles] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`http://localhost:3001/games`);

      setGame(response.data);
    };
    getGames();

    const getConsoles = async () => {
      const response = await axios.get("http://localhost:3001/consoles");

      setConsoles(response.data);
    };
    getConsoles();
  }, []);

  return (
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