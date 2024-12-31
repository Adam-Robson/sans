import React from "react";
import type { IControlsProps } from "../types/controls";
import "./controls.css";

export default function Controls({
  togglePause,
  running,
  resetGame,
  handleStartGame,
}: IControlsProps) {
  return (
    <div className="controls">
      {running && togglePause && <button onClick={togglePause}>Pause</button>}
      {running ? (
        <button onClick={resetGame}>Reset</button>
      ) : (
        <button onClick={handleStartGame}>Start</button>
      )}
    </div>
  );
}
