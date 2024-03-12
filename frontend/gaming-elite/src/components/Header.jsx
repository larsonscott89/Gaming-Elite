import Nav from "./Nav";

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ setSearchTerm, setSearchType, loggedIn, username, setLoggedIn }) {
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
    );

}
