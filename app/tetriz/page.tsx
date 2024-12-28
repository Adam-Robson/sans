import { GameProvider } from "@tetriz/src/contexts/GameContext";
import Tetriz from "@tetriz/src/components/Tetriz";
import "./tetriz.css";

export default function Page() {
  return (
    <div className="page-container">
      <GameProvider>
        <Tetriz />
      </GameProvider>
    </div>
  );
}
