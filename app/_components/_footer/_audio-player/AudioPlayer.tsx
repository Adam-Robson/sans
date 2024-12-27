"use client";

import { useState } from "react";
import AudioControls from "./AudioControls";
import AudioPlaylist from "./AudioPlaylist";
import AudioToggleButton from "@/app/_components/_footer/_audio-player/AudioToggleButton";
import { useAudioContext } from "@/app/_contexts/AudioProvider";
import "./audio-player.css";

export default function AudioPlayer() {
  const [isVisible, setIsVisible] = useState(false);
  const { song, playback, elapsed, duration } = useAudioContext() ?? {};
  return (
    <div className="audio-player">
      <div className={`player-card shadow-xl ${isVisible ? "visible" : ""}`}>
        <AudioPlaylist />

        <div className="now-playing">
          {playback && (
            <>
              <div className="song-title">{song.title}</div>

              <div className="song-timing">
                {elapsed} / {duration}
              </div>
            </>
          )}
        </div>

        <AudioControls />
      </div>

      <AudioToggleButton isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}
