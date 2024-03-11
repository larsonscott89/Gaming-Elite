import { Link } from 'react-router-dom';

const SearchConsoleList = ({ consoles }) => {
  return (
    <div>
      {consoles.map(console => (
        <div key={console._id}>
          <h3>{console.name}</h3>
          <p>Brand: {console.brand}</p>
          <p>Year Released: {console.year_released}</p>
          <p>Price: {console.price}</p>
          <img src={console.img_path} alt={console.name} style={{ width: '100px', height: '100px' }} />
        </div>
      ))}
    </div>
  );
};

export default SearchConsoleList;
