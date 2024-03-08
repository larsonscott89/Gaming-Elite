import Home from "./Home"
import Consoles from "./Consoles"
import Games from "./Games"
import GameDetails from "./GameDetails"
import Accessories from "./Accessories"
import SearchResults from "./SearchResults"
import UserSignup from "./UserSignup"

import { Routes, Route } from 'react-router-dom';
import UserLogin from "./UserLogin"
import Cart from './Cart'
export default function Main (){
    return(
<div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/:id" element={<GameDetails />} />
                <Route path="/consoles" element={<Consoles />} />
                <Route path="/accessories" element={<Accessories />} />
                <Route path="/searchResults" element={<SearchResults />} />
                <Route path="/Signup" element={<UserSignup />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>


    )
}

