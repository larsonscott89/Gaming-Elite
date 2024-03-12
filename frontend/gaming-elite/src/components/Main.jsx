import Home from "./Home"
import Consoles from "./Consoles"
import ConsoleDetails from "./ConsoleDetails"
import Games from "./Games"
import GameDetails from "./GameDetails"
import Accessories from "./Accessories"
import SearchResults from "./SearchResults"
import UserSignup from "./UserSignup"
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLogin from "./UserLogin"
import Cart from './Cart'
import Header from "./Header"
import Retro from './Retro'
import GamesByPlatform from './GamesByPlatform'


export default function Main (){

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('');
    return(
<div>

            <div >
                <Header loggedIn={loggedIn} username={username} setLoggedIn={setLoggedIn} setSearchTerm={setSearchTerm} setSearchType={setSearchType} />
            </div>
            <Routes>
                <Route path="/" element={< Home loggedIn={loggedIn}/>} />
                <Route path="/games" element={<Games />} />

                <Route path="/games/:id" element={<GameDetails  userId={userId} />} />

                <Route path="/consoles/:id" element={<ConsoleDetails />} />
                <Route path="/retro" element={<Retro/>}/>
                <Route path="/games/consoles/:id" element={<GamesByPlatform/>}/>

                <Route path="/consoles" element={<Consoles />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/searchResults" element={<SearchResults searchTerm={searchTerm} searchType={searchType} />} />
                <Route path="/signup" element={<UserSignup />} />
                <Route path="/login" element={<UserLogin setLoggedIn={setLoggedIn} setUsername={setUsername}  setUserId={setUserId}/>} />
                <Route path="/cart" element={<Cart  userId={userId} username={username}/>} />
            </Routes>


        </div>


    )
}
