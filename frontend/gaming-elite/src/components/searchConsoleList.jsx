import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchConsoleList = ({ consoles }) => {
  const [hideList, setHideList] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation(); // Prevent the event from bubbling up to parent elements
    setHideList(true);
  };

  return (
    <div>
      {!hideList &&
        consoles.map((console) => (
          <div key={console._id}>
            <Link to={`/consoles/${console._id}`} onClick={handleClick}>
              <h3>{console.name}</h3>
              <img
                src={console.img_path}
                alt={console.title}
                style={{ width: '100px', height: '100px' }}
                onClick={handleClick}
              />
            </Link>
            <p>Brand: {console.brand}</p>
            <p>Year Released: {console.year_released}</p>
            <p>Price: {console.price}</p>
          </div>
        ))}
    </div>
  );
};

export default SearchConsoleList;
