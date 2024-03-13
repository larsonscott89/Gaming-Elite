import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchConsoleList from './searchConsoleList';
import SearchGameList from './searchGameList';
import '../style/searchResult.css'

function SearchResults({loggedIn}) {
    const [games, setGames] = useState([]);
    const [consoles, setConsoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('game');

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
        <div className='search'>
       
        </div>
    );
}

export default SearchResults;
