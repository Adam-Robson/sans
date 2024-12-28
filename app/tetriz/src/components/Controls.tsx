import React from "react";
import type { IControlsProps } from "../types/controls";
import Button from "./Button";
import "./controls.css";

export default function Controls({
  togglePause,
  running,
  resetGame,
  handleStartGame,
}: IControlsProps) {
  return (
    <div className="buttons">
      {running && togglePause && (
        <Button onClick={togglePause} text={`Pause`} />
      )}
      {running ? (
        <Button text={`Reset`} onClick={resetGame} />
      ) : (
        <Button text={`Start`} onClick={handleStartGame} />
      )}
    </div>
  );
}
