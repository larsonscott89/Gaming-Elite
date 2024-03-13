import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Link } from 'react-router-dom'
import styles from '../style/Retro.module.css'
import Nav from './Nav'

export default function Retro({ setSearchTerm, setSearchType, loggedIn, username, setLoggedIn }) {
  const [game, setGame] = useState([])
  const [consoles, setConsoles] = useState([])

  const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Search term:', search);
        setSearchTerm(search);
        console.log('New search term:', search);
    };
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSignOut = () => {
        setLoggedIn(false);
    };

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

        <div className="retro-header">
            <div className="retro-title-and-buttons">
                <Link to="/" className="title">
                    <h1 className="retro-gaming-elite">Gaming Elite</h1>
                </Link>
                <div className="search-bar-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={search} onChange={handleChange} placeholder="Search games, consoles, and more" />
                        <select onChange={handleSearchTypeChange}>
                            <option value="games">Game</option>
                            <option value="consoles">Console</option>
                        </select>
                        <button className="search-button" type="submit">Search</button>
                    </form>
                </div>
                <div className="top-right-buttons">
                    {loggedIn ? (
                         <div>
                       <span style={{ color: 'red' }}>Welcome, {username}</span>
                       <button type="button" onClick={handleSignOut}>Sign Out</button>
                       </div>
                    ) : (
                        <Link to="/signup" className="signup-container">
                                <img className="signup-icon"
                                    src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                                    alt="login_img" />
                        </Link>
                    )}
                    <Link to="/cart" className="cart-container">
                            <img className="cart-icon"
                                src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
                                alt="Shopping_Cart"/>
                    </Link>
                </div>
            </div>
            <div className="navbar">
                <Nav />
            </div>
        </div>
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