import { AudioProvider } from "@/_contexts/AudioProvider";
import AudioPlayer from "./_audio-player/AudioPlayer";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="player-container">
        <AudioProvider>
          <AudioPlayer />
        </AudioProvider>
      </div>
    </footer>
  );
}
