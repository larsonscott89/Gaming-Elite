import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Games.css";

export default function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [ads, setAds] = useState([]);

  const navigate = useNavigate();
  let showItem = (id) => {
    navigate(`/consoles/${id}`);
  };

  useEffect(() => {
    const getConsoles = async () => {
      const response = await axios.get("http://localhost:3001/consoles");

      setConsoles(response.data);
    };
    getConsoles();

    const getAds = async () => {
      const adResponse = await axios.get("http://localhost:3001/bannerAds");
      setAds(adResponse.data);
    };

    getAds();
  }, []);

  const pick1RandomAd = () => {
    const shuffledArray = ads.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 1);
  };

  const mainConsoles = [];

  for (let console of consoles) {
    if (
      console.name == "Playstation 5" ||
      console.name == "Xbox Series X/S" ||
      console.name == "Nintendo Switch" ||
      console.name == "PC"
    ) {
      mainConsoles.push(console);
    }
  }

  return (
    <div className="games-page-container">
      <div className="top-ad-section">
        <div className="top-ad-container">
          {pick1RandomAd().map((ad, index) => (
            <div className="ad-card" key={index}>
              <img className="ad-image" src={ad.image_path} alt="" />
            </div>
          ))}
        </div>
      </div>    
      <div className="platforms-container">
        <h3>Browse Consoles for Sale</h3>
        <div className="platform-cards-container">
          {mainConsoles.map((item, index) => (
            <div
              className="platform-card"
              key={item._id}
              onClick={() => showItem(item._id)}
            >
              <img className="platform-image" src={item.img_path} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
