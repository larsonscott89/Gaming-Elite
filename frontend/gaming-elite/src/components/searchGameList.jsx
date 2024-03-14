import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/searchResult.css'

const SearchGameList = ({ games }) => {
  const [hideList, setHideList] = useState(false);
 
  const handleClick = () => {
    setHideList(true);
  };
  
 
  return (
    <div className="search-page-container">
      <div className="search-title-items-container">
       
        <div className="search-title">
          <h1>Search Results</h1>
        </div>
      
        <div className="search-items-container">
        {!hideList &&
          games.map((game) => (
            <Link to={`/games/${game._id}`} onClick={handleClick}>
            <div className="search-card" key={game._id}>
                <div className="search-image-container">
                  <img className='search-game-image'
                    src={game.img_path}
                    alt={game.title}
                    onClick={handleClick}
                  />
                </div>
                <div className="search-details-container">
                  <div className="search-game-title-container">
                    <h2 className='search-game-title'>{game.title}</h2>
                    <h3 className="search-game-price">${game.price}</h3>
                  </div>
                  <div className="search-game-details">
                    <div className='search-game-details-box'>
                      <p className='search-game-release'>Release Year: <span className='search-year-released'>{game.year_released}</span></p>
                      <p className='search-genres-title'>Genres</p>
                      <p className='search-game-genres'>{game?.genre.join(', ')}</p>
                    </div>
                    <div className='search-game-details-box'>
                      <p className='search-game-players'>Number of Players: <span className='search-player-number'> {game.number_of_players}</span></p>
                      <div className='search-online-container'>
                        <p className='search-game-online'>Online</p>
                        <p>{game?.online ? ( <p className="search-online-boolean">Yes</p> ) : (<p className="search-online-boolean">No</p>)}</p>
                      </div>
                    </div>
                    <div className='search-game-details-box'>
                      <img className='search-rating-img' src={game?.rating_img} alt=''/>
                    </div>
                  </div>
                </div>
            </div>
            </Link>
          ))}
          </div>
        </div>
    </div>
  );
};

export default SearchGameList;
