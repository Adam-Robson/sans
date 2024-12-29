import { GameProvider } from "@tetriz/src/contexts/GameContext";
import Tetriz from "@tetriz/src/components/Tetriz";
import "./tetriz.css";

export default function Page() {
  return (
    <div className="page-container">
      <h1 className="title">Tetriz</h1>

      <GameProvider>
        <Tetriz />
      </GameProvider>
    </div>
  );
}
