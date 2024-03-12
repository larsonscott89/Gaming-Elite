import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import axios from "axios"
import '../style/Retro.css'

export default function Retro() {
  const [game, setGame] = useState([])
  const [consoles, setConsoles] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const gamesResponse = await axios.get("http://localhost:3001/games")
      setGame(gamesResponse.data);

      const consolesResponse = await axios.get("http://localhost:3001/consoles")
      setConsoles(consolesResponse.data);
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="details-card">
        {game.map((game, index) => (
          game.year_released <= 1995 && (
            <div key={game._id}>
              <h1>{game.title}</h1>
              <img className='game-cover' src={game.img_path} alt="" />
              <h2>${game.price}</h2>
            </div>
          )
        ))}
      </div>

      <div className="details-card">
        {consoles.map((console, index) => (
          console.year_released <= 1995 && (
          <div key={console._id}>
            <h1>{console.name}</h1>
            <img className='console-cover' src={console.img_path} alt="" />
            <h2>${console.price}</h2>
          </div>
        )
        ))}
      </div>
    </div>
  )
}