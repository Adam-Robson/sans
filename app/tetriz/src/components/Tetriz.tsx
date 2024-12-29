"use client";
import Game from "./Game";
import { useGameContext } from "@tetriz/src/contexts/GameContext";
import Instructions from "@tetriz/src/components/Instructions";
// import Preview from "@tetriz/src/components/Preview";
import Controls from "@tetriz/src/components/Controls";

import "./tetriz.css";

export default function Tetriz() {
  const {
    running,
    // nextPiece,
    resetGame,
    handleStartGame,
    togglePause,
  } = useGameContext();

  return (
    <div className="tetriz-container">
      {/* <Preview shape={nextPiece.shape} color={nextPiece.color} /> */}

      <Game />

      <Controls
        running={running}
        resetGame={resetGame}
        handleStartGame={handleStartGame}
        togglePause={togglePause}
      />

      <Instructions />
    </div>
  );
}
