import Nav from "./Nav";
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import SearchConsoleList from './searchConsoleList';
import SearchGameList from './searchGameList';


const Header = ({  loggedIn, username, setLoggedIn }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const [games, setGames] = useState([]);
    const [consoles, setConsoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('game');
    
    const handleChange = (event) => {
        setSearch(event.target.value);
        // Update search term as user types
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Update search term only when form is submitted
        setSearchTerm(search);
        navigate('/searchResults'); 
    };

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSignOut = () => {
        setLoggedIn(false);
        localStorage.removeItem('loggedIn');
        
    };

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setGames([]);
            setConsoles([]);
            return;
        }

        let url = '';
        if (searchType === 'games') {
            url = `http://localhost:3001/games/search?search=${searchTerm}`;
        } else if (searchType === 'consoles') {
            url = `http://localhost:3001/consoles/search?search=${searchTerm}`;
        }

        axios.get(url)
            .then(response => {
                if (searchType === 'games') {
                    setGames(response.data || []);
                } else if (searchType === 'consoles') {
                    setConsoles(response.data || []);
                    
                }
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, [searchTerm, searchType]);



    return (
        <div className="header">
            <div className="title-and-buttons">
                <Link to="/" className="title">
                    <h1 className="gaming-elite">Gaming Elite</h1>
                </Link>
                <div className="search-bar-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={search} onChange={handleChange} placeholder="Search games, consoles, and more" />
                        <select onChange={handleSearchTypeChange}>
                            <option>Type</option>
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
            <div className='searchResult'>
            <SearchGameList games={games} />
            <SearchConsoleList consoles={consoles} />
        </div>
        </div>
    );
}

export default Header;