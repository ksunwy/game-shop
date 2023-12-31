import React from "react";
import { useSelector } from 'react-redux';

import "./game-page.css";
import GameCover from "../../components/game-cover/GameCover";
import GameGenre from "../../components/game-genre/GameGenre";
import GameBuy from "../../components/game-buy/GameBuy";

export const GamePage = () => {
  const game = useSelector(state => state.game.currentGame);
  console.log('game', game);

  if(!game) return null

  return (
    <div className="game-page">
      <h1 className="game-page__title">{ game.title }</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;