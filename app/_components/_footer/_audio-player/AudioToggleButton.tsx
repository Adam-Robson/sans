"use client";

import { FiX, FiSpeaker } from "react-icons/fi";
import type { IAudioPlayerToggleProps } from "@/_types/audio-provider";
import "./audio-toggle-button.css";

export default function AudioToggleButton({
  isVisible,
  setIsVisible,
}: IAudioPlayerToggleProps) {
  function toggleAudioPlayer() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="audio-toggle">
      <button onClick={toggleAudioPlayer} className="toggle-button">
        {isVisible ? <FiX size={32} /> : <FiSpeaker size={32} />}

        <label className="toggle-label">
          {isVisible ? "Hide Player" : "Show Player"}
        </label>
      </button>
    </div>
  );
}
