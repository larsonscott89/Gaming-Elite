import { Link } from 'react-router-dom';

const SearchGameList = ({ games }) => {
  return (
    <div>
      {games.map(game => (
        <div key={game._id}>
          <Link to={`/games/${game._id}`}>
            <h3>{game.title}</h3>
            <img src={game.img_path} alt={game.title} style={{ width: '100px', height: '100px' }} />
          </Link>
          <h3>{game.title}</h3>
            <img src={game.img_path} alt={game.title} style={{ width: '100px', height: '100px' }} />
          <p>Genre: {game.genre}</p>
          <p>Year Released: {game.year_released}</p>
          <p>Price: {game.price}</p>
          <p>Number of Players: {game.number_of_players}</p>
          <p>Online: {game.online}</p>
          <p>Rating: {game.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchGameList;
