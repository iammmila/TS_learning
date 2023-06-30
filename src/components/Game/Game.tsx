import React, { useState } from "react";
//exercise 1
const Game = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "malahat",
    },
  });

  const handleCLick = () => {
    setGame({ ...game, player: { ...game.player, name: "vusala" } });
  };

  return (
    <>
      {game.player.name}
      <button onClick={handleCLick}>click</button>
    </>
  );
};

export default Game;
