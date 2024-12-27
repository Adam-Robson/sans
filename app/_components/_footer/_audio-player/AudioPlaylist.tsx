import { useAudioContext } from "@/app/_contexts/AudioProvider";
import { playlist } from "@/app/_contexts/AudioProvider";
import { ISong } from "@/app/_types/audio-provider";
import "./audio-playlist.css";

export default function AudioPlaylist() {
  const { currentIndex, handleSongChange } = useAudioContext() ?? {};

  return (
    <div className="audio-playlist flex flex-col justify-start items-center p-4">
      <ul className="playlist-list">
        {playlist.map((track: ISong, index: number) => (
          <li
            key={track.id}
            className={`playlist-list-item ${
              currentIndex === index ? "active" : ""
            }`}
          >
            <button
              className="playlist-button"
              onClick={() => handleSongChange && handleSongChange(index)}
            >
              {track.title} ({track.album})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
