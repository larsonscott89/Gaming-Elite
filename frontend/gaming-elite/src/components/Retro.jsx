import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from 'react-router-dom'
import styles from '../style/Retro.module.css'

export default function Retro() {
  const [game, setGame] = useState([])
  const [consoles, setConsoles] = useState([])

  const navigate = useNavigate()
  let showConsole = (id) => {
    navigate(`/retro/console/${id}`)
  }

  let showGame = (id) => {
    navigate(`${id}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      const gamesResponse = await axios.get("http://localhost:3001/games")
      setGame(gamesResponse.data)

      const consolesResponse = await axios.get("http://localhost:3001/consoles")
      setConsoles(consolesResponse.data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 className={styles['retro-game']}> Retro Games </h1> 
      <div className={styles['retro-card']}>
        {game.map((game, index) => (
          game.year_released <= 1995 && (
            <div key={game._id} onClick={() => showGame(game._id)}>
              <h1 className={styles['retro-game-title']}>{game.title}</h1>
              <img className={styles['retro-game-cover']} src={game.img_path} alt="" />
              <h2 className={styles['retro-game-price']}>${game.price}</h2>
            </div>
          )
        ))}
      </div>
      <h1 className={styles['retro-console']}> Consoles </h1>
      <div className={styles['retro-console-card']}>
        {consoles.map((console, index) => (
          console.year_released <= 1995 && (
            <div key={console._id} onClick={() => showConsole(console._id)}>
              <h1 className={styles['retro-console-title']}>{console.name}</h1>
              <img className={styles['retro-console-cover']} src={console.img_path} alt="" />
              <h2 className={styles['retro-console-price']}>${console.price}</h2>
            </div>
          )
        ))}
      </div>
    </div>
  )
}