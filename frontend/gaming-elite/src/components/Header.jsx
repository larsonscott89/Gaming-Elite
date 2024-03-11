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
        setSearchTerm(search);
    };
    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleSignOut = () => {
        setLoggedIn(false);
    };
    return (
        <div>
            <div className="title-and-buttons">
                <Link to="/">
                    <h1>Gaming Elite</h1>
                </Link>
                <div className="search-bar">
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={search} onChange={handleChange} placeholder="Search..." />
                        <select onChange={handleSearchTypeChange}>
                        <option value="games">Game</option>
                        <option value="consoles">Console</option>
            </select>
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="top-right-buttons">
                    {loggedIn ? (
                         <div>
                       <span style={{ color: 'red' }}>Welcome, {username}</span>
                       <button type="button" onClick={handleSignOut}>Sign Out</button>
                       </div>
                    ) : (
                        <Link to="/signup">
                            <button type="button" className="signup">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                                    alt="login_img"
                                    style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '30px' }}
                                />
                                signup
                            </button>
                        </Link>
                    )}
                    <Link to="/cart">
                        <button type="button" className="Cart">
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"
                                alt="Shopping_Cart"
                                style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', width: '50px', height: '30px' }}
                            />
                            Cart
                        </button>
                    </Link>
                </div>
            </div>
            <div className="navbar">
                <Nav />
            </div>
        </div>
    );

}
