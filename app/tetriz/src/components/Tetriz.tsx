"use client";
import Game from "./Game";
import { useGameContext } from "@tetriz/src/contexts/GameContext";
import Instructions from "@tetriz/src/components/Instructions";
import Preview from "@tetriz/src/components/Preview";
import Controls from "@tetriz/src/components/Controls";
import Stats from "@tetriz/src/components/Stats";

import "./tetrix.css";

export default function Tetriz() {
  const {
    level,
    clearedLines,
    running,
    nextPiece,
    resetGame,
    handleStartGame,
    togglePause,
  } = useGameContext();

  return (
    <div className="tetriz-container">
      <h1 className="title">Tetriz</h1>
      <Preview shape={nextPiece.shape} color={nextPiece.color} />
      <Stats clearedLines={clearedLines} level={level} />

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
