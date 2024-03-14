import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchConsoleList = ({ consoles }) => {
  const [hideList, setHideList] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
    setHideList(true);
  };

  return (
    <div className="search-page-container">
        <div className="search-items-container">
          {!hideList &&
            consoles.map((console) => (
              <Link to={`/consoles/${console._id}`} onClick={handleClick}>
              <div className="search-card" key={console._id}>
                <div className="search-image-container">  
                  <img className="search-image"
                    src={console.img_path}
                    alt={console.title}
                    onClick={handleClick}
                  />
                </div>
                <div className="search-details-container">
                  <div className='search-console-title-container'>
                    <h2 className="search-title">{console.name}</h2>
                  </div>
                  <div className='search-details'>
                    <div className='search-details-box'>
                      <h3 className='search-price'>${console.price}</h3>
                    </div>
                    <div className='search-details-box'>
                      <p className='search-brand-title'>Brand: <span className='search-brand'>{console.brand}</span></p>
                      <p className='search-release-title'>Release Year: <span className='search-year-released'>{console.year_released}</span></p>
                    </div>
                  </div>
                </div>   
              </div>
              </Link>
          ))}
        </div>
    </div>
  );
};

export default SearchConsoleList;
