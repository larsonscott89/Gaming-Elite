import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Games.css";

export default function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [ads, setAds] = useState([]);
  const [brands, setBrands] = useState([]);

  const navigate = useNavigate();
//   let showItem = (id) => {
//     navigate(`/consoles/${id}`);
//   };

let showBrand = (id) => {
        navigate(`/brands/${id}`);
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

    const getBrands = async () => {
      const brandResponse = await axios.get("http://localhost:3001/brands");
      setBrands(brandResponse.data);
    };
    getBrands()
  }, []);

  for(let brand of brands){
    if(brand.name=='Sony'){
        brand.img_path="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/800px-PlayStation_App_Icon.jpg"
    }
    if(brand.name=='Microsoft'){
        brand.img_path="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Xbox_app_logo.svg/1200px-Xbox_app_logo.svg.png"
    }
    if(brand.name=='Nintendo'){
        brand.img_path="https://upload.wikimedia.org/wikipedia/commons/9/95/Nintendo_Logo_2017.png"
    }
    if(brand.name=='Sega'){
        brand.img_path="https://fontmeme.com/images/Sega-Logo.jpg"
    }
    if(brand.name=='Atari'){
        brand.img_path="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Atari_Official_2012_Logo.svg/1200px-Atari_Official_2012_Logo.svg.png"
    }
  }

  console.log(brands)

  const pick1RandomAd = () => {
    const shuffledArray = ads.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 1);
  };


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
        <h3>Browse Brands</h3>
        <div className="platform-cards-container">
          {brands.map((item, index) => (
            <div
              className="platform-card"
              key={item._id}
              onClick={() => showBrand(item._id)}
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
