import { TBoard } from "@tetriz/src/types/board";
import { TTetromino } from "@tetriz/src/types/tetromino";

export interface IGameContextProps {
  board: TBoard;
  level: number;
  clearedLines: number;
  paused: boolean;
  running: boolean;
  gameOver: boolean;
  currentPiece: TTetromino;
  nextPiece: TTetromino;
  resetGame: () => void;
  handleStartGame: () => void;
  togglePause: () => void;
  firstPieceHidden: boolean;
  setFirstPieceHidden: (hidden: boolean) => void;
}

export interface IStatsProps {
  clearedLines: number;
  level: number;
}
