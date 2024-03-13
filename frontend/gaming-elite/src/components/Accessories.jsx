import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Accessory() {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAccessories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/accessories");
        setAccessories(response.data);
      } catch (error) {
        console.error("Error fetching accessories: ", error);
      }
    };

    getAccessories();
  }, []);

  const showAccessoryDetails = (id) => {
    navigate(`/accessories/${id}`);
  };

  return (
    <div className="Accessory-page-container">
      <h1>Accessories</h1>
      <div className="accessory-list">
        {accessories.map((accessory) => (
          <div key={accessory._id} className="accessory-item" onClick={() => showAccessoryDetails(accessory._id)}>
            <img src={accessory.image} alt={accessory.name} />
            <h3>{accessory.name}</h3>
            <p>{accessory.description}</p>
            <p>Price: ${accessory.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
