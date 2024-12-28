"use client";
import { useState } from "react";
import "./instructions.css";

export default function Instructions() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="instructions-container">
      <button onClick={toggleVisibility}>Instructions</button>
      <div className={`instructions-card ${visible ? "visible" : ""}`}>
        <h3 className="instructions-title">Instructions</h3>
        <ol className="instructions">
          <li>Use the left and right arrows to move horizontally.</li>
          <li>The up arrow rotates the piece.</li>
          <li>Every ten (10) lines cleared increases the level.</li>
        </ol>
      </div>
    </div>
  );
}
