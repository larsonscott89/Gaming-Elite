import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchGameList = ({ games }) => {
  const [hideList, setHideList] = useState(false);

  const handleClick = () => {
    setHideList(true);
  };

  return (
    <div>
      {!hideList &&
        games.map((game) => (
          <div key={game._id}>
            <Link to={`/games/${game._id}`} onClick={handleClick}>
              <h3>{game.title}</h3>
              <img
                src={game.img_path}
                alt={game.title}
                style={{ width: '100px', height: '100px' }}
                onClick={handleClick}
              />
            </Link>
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
