import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";

export default function Home() {
  const [games, setGames] = useState([]);
  const [consoles, setConsoles] = useState([]);

  const [ads, setAds] = useState([]);

  const navigate = useNavigate();
  let showItem = (id) => {
    navigate(`consoles/${id}`);
  };

  let showGame = (id) => {
    navigate(`/games/${id}`);
  };

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`http://localhost:3001/games`);

      setGames(response.data);
    };
    getGames();

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

  const pick2RandomItems = () => {
    const shuffledArray = games.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 2);
  };

  const pick4RandomItems = () => {
    const shuffledArray = games.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, 4);
  };

  return (
    <div className="home-page-container">
        
      <div className="home-top-ad-section">
        <div className="home-top-ad-container">
        {pick1RandomAd().map((ad, index) => (
          <div className="ad-card" key={index}>
            <img className="ad-image" src={ad.image_path} alt="" />
          </div>
        ))}
        </div>
      </div>

      <div className="home-random-games-container">
        <div className="home-random-cards-container">
          {pick2RandomItems().map((game, index) => (
            <div
              className="home-game-icon"
              key={game._id}
              onClick={() => showGame(game._id)}
            >
              <img className="home-random-game-icon-image" src={game.img_path} alt="" />
              <h3>{game.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="home-bottom-ad-section">
        <div className="home-bottom-ad-container">
        {pick1RandomAd().map((ad, index) => (
          <div className="ad-card" key={index}>
            <img className="ad-image" src={ad.image_path} alt="" />
          </div>
        ))}
        </div>
      </div>

      {/* <div className="home-platforms-container">
        <h3>Browse Games by Platform</h3>
        <div className="home-platform-cards-container">
          {mainConsoles.map((item, index) => (
            <div
              className="home-platform-card"
              key={item._id}
              onClick={() => showItem(item._id)}
            >
              <img className="home-platform-image" src={item.img_path} alt="" />
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div> */}

      <div className="home-suggested-games-container">
        <h3>Suggested Games</h3>
        <div className="home-suggested-cards-container">
          {pick4RandomItems().map((game, index) => (
            <div
              className="home-game-icon"
              key={game._id}
              onClick={() => showGame(game._id)}
            >
              <img className="home-suggested-image" src={game.img_path} alt="" />
              <h3>{game.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
