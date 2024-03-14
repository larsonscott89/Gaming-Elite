import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../style/BrandDetails.css";

import axios from "axios";

import { useNavigate } from "react-router-dom";


export default function BrandDetails() {
  let { id } = useParams();
  const [consoles, setConsoles] = useState([]);
  const [ads, setAds] = useState([]);
  const [brands, setBrands] = useState([]);

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

  let consoleBrands = [];

  for (let system of consoles) {
    if (system.brandId == id && system.year_released > 1999) {
      consoleBrands.push(system);
    }
  }

  const pick1RandomAd = () => {
    const shuffledArray = ads.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 1);
  };

  return (
    <div className="browse-platforms-page-container">
      <div className="top-ad-section">
        <div className="top-ad-container">
          {pick1RandomAd().map((ad, index) => (
            <div className="ad-card" key={index}>
              <img className="ad-image" src={ad.image_path} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="browse-platforms-container">
        <div className="browse-title-cards-container">
          <div className="browse-title-container">
            <h1 className="browse-title">Browse by Console</h1>
          </div>
        <div className="browse-cards-container">
          {consoleBrands.map((item, index) => (
            <div
              className="browse-card"
              key={item._id}
              onClick={() => showItem(item._id)}>
              <img className="browse-image" src={item.img_path} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
