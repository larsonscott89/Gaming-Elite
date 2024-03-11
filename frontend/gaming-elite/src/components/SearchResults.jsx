import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import SearchConsoleList from './searchConsoleList';
import SearchGameList from './searchGameList';

export default function SearchResults() {
    const [games, setGames] = useState([]);
    const [consoles, setConsoles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('game');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                let response;
                if (searchType === 'games') {
                    response = await axios.get(`http://localhost:3001/games/search?search=${searchTerm}`);
                    setGames(response.data);
                } else if (searchType === 'consoles') {
                    response = await axios.get(`http://localhost:3001/consoles/search?search=${searchTerm}`);
                    setConsoles(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        if (searchTerm.trim() !== '') {
            fetchData();
        } else {
            setGames([]);
            setConsoles([]);
        }
    }, [searchTerm, searchType]);

    return (
        <div>
            <Header setSearchTerm={setSearchTerm} setSearchType={setSearchType} />
            {searchType === 'games' && <SearchGameList games={games} />}
            {searchType === 'consoles' && <SearchConsoleList consoles={consoles} />}
            <h1>Search Results</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}
