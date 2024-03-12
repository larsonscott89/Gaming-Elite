import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import '../style/Retro.css'

export default function Retro() {
  const [game, setGame] = useState([])
  const [consoles, setConsoles] = useState([])

  const navigate = useNavigate();
  let showConsole = (id) => {
    navigate(`/retro/console/${id}`);
  };

  let showGame = (id) => {
    navigate(`${id}`);
  };

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
      <div className="retro-card">
        {game.map((game, index) => (
          game.year_released <= 1995 && (
            <div key={game._id}
                  onClick={() => showGame(game._id)}>
              <h1>{game.title}</h1>
              <img className='retrogame-cover' src={game.img_path} alt="" />
              <h2>${game.price}</h2>
            </div>
          )
        ))}
      </div>

      <div className="retro-console-card">
        {consoles.map((console, index) => (
          console.year_released <= 1995 && (
          <div key={console._id}
                onClick={() => showConsole(console._id)}>
            <h1>{console.name}</h1>
            <img className='retro-console-cover' src={console.img_path} alt="" />
            <h2>${console.price}</h2>
          </div>
        )
        ))}
      </div>
    </div>
  )
}