import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { useNavigate } from "react-router-dom";
import "../style/Games.css";

export default function GamesByPlatform() {
  let { id } = useParams();
  const [games, setGames] = useState([]);
  const [ads, setAds] = useState([]);

  const navigate = useNavigate();
  let showGame = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  useEffect(() => {
    const getGames = async () => {
      const response = await axios.get(`http://localhost:3001/games`);
      let allGames = response.data;
      //creating an empty array to push games that only have the consoleId, to later set the useState to
      let consoleGames = [];
      //iterating through all the games
      for (let game of allGames) {
        //iterating through each game's array of console Id's
        for (let consoleId of game.consoleId) {
          //checking if the game's array of consoles includes the console id from params, and if so, pushing to my consoleGames array made earlier
          if (consoleId == id) {
            consoleGames.push(game);
          }
        }
      }
      //setting the use state games array to only have the games if the game has the console id
      setGames(consoleGames);
    };
    getGames();

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

  console.log(pick1RandomAd());

  return (
    <div>
      <div className="ads">
        {pick1RandomAd().map((ad, index) => (
          <div className="ad-card" key={index}>
            <img src={ad.image_path} alt="" />
          </div>
        ))}
      </div>

      {games.map((game, index) => (
        <div
          className="game-card"
          key={game._id}
          onClick={() => showGame(game._id)}
        >
          <img className="game-image" src={game.img_path} alt="" />
          <h1>{game.title}</h1>
          <h3>{game.price}</h3>
        </div>
      ))}
    </div>
  );
}
