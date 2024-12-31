"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useContext,
  ReactNode,
} from "react";
import type { TTetromino } from "@tetriz/src/types/tetromino";
import {
  getRandomTetromino,
  rotateTetromino,
} from "@tetriz/src/utils/tetromino";
import { TBoard } from "@tetriz/src/types/board";
import {
  checkCollision,
  createEmptyBoard,
  clearFullLines,
} from "@tetriz/src/utils/board";
import type { IGameContextProps } from "@tetriz/src/types/game";

const GameContext = createContext<IGameContextProps | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<TBoard>(createEmptyBoard());
  const [level, setLevel] = useState<number>(1);
  const [paused, setPaused] = useState<boolean>(false);
  const [running, setRunning] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [clearedLines, setClearedLines] = useState<number>(0);
  const [firstPieceHidden, setFirstPieceHidden] = useState(true);
  const [lastAnimationFrame, setLastAnimationFrame] = useState<number>(0);
  const [currentPiece, setCurrentPiece] = useState<{
    shape: number[][];
    color: string;
    position: { x: number; y: number };
  }>({ ...getRandomTetromino(), position: { x: 4, y: 0 } });
  const [nextPiece, setNextPiece] = useState<TTetromino>({
    ...getRandomTetromino(),
    position: { x: 4, y: 0 },
  });

  const resetGame = () => {
    // Reset game to initial state
    setBoard(createEmptyBoard());
    setLevel(1);
    setLastAnimationFrame(0);
    setRunning(false);
    setPaused(false);
    setGameOver(false);
    setClearedLines(0);
    setNextPiece({ ...getRandomTetromino(), position: { x: 4, y: 0 } });
    setNextPiece(getRandomTetromino());
    setFirstPieceHidden(true);
  };

  const handleStartGame = () => {
    setRunning(true);
    setPaused(false);
    setGameOver(false);
    setBoard(createEmptyBoard());
    setCurrentPiece({ ...getRandomTetromino(), position: { x: 4, y: 0 } });
    setNextPiece(getRandomTetromino());
    setClearedLines(0);
    setLevel(1);
    setFirstPieceHidden(false);
  };

  function togglePause() {
    if (!running) return;
    setPaused((prev) => !prev);
  }

  const lockPiece = useCallback(() => {
    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard].map((row) => [...row]);

      currentPiece.shape.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            const boardY = currentPiece.position.y + i;
            const boardX = currentPiece.position.x + j;

            if (
              boardY >= 0 &&
              boardY < updatedBoard.length &&
              boardX >= 0 &&
              boardX < updatedBoard[0].length
            ) {
              updatedBoard[boardY][boardX] = currentPiece.color;
            }
          }
        });
      });

      const { newBoard, clearedRows } = clearFullLines(updatedBoard);
      setClearedLines((prev) => {
        const totalCleared = prev + clearedRows;
        if (Math.floor(totalCleared / 10) > level - 1) {
          setLevel((prevLevel) => prevLevel + 1);
        }
        return totalCleared;
      });

      return newBoard;
    });

    const newPiece = {
      ...nextPiece,
      position: { x: 4, y: 0 },
    };

    if (checkCollision(newPiece.shape, board, newPiece.position)) {
      setGameOver(true);
      return;
    }

    setCurrentPiece(newPiece);
    setNextPiece(getRandomTetromino());
  }, [board, currentPiece, nextPiece, level]);

  const movePiece = useCallback(
    (direction: "left" | "right" | "down") => {
      setCurrentPiece((prev) => {
        const newPosition = { ...prev.position };
        if (direction === "left") newPosition.x -= 1;
        if (direction === "right") newPosition.x += 1;
        if (direction === "down") newPosition.y += 1;

        if (!checkCollision(prev.shape, board, newPosition)) {
          return { ...prev, position: newPosition };
        }

        if (direction === "down") lockPiece();
        return prev;
      });
    },
    [board, lockPiece]
  );

  const rotatePiece = useCallback(() => {
    setCurrentPiece((prev) => {
      const rotatedShape = rotateTetromino(prev.shape);
      if (!checkCollision(rotatedShape, board, prev.position)) {
        return { ...prev, shape: rotatedShape };
      }
      return prev;
    });
  }, [board]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (gameOver) return;

      if (e.code === "Space") {
        e.preventDefault();
        if (running) setPaused((prev) => !prev);
      }

      if (running && !paused) {
        e.preventDefault();
        if (e.key === "ArrowLeft") movePiece("left");
        if (e.key === "ArrowRight") movePiece("right");
        if (e.key === "ArrowDown") movePiece("down");
        if (e.key === "ArrowUp") rotatePiece();
      }
    },
    [gameOver, running, paused, movePiece, rotatePiece]
  );

  useEffect(() => {
    let animationFrameId: number;

    const gameLoop = (currentTime: number) => {
      if (gameOver || !running || paused) return;

      const elapsedTime = currentTime - lastAnimationFrame;
      if (elapsedTime > 1000) {
        movePiece("down");
        setLastAnimationFrame(currentTime);
      }
      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [lastAnimationFrame, running, gameOver, paused, movePiece]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const contextValue = {
    board,
    level,
    paused,
    running,
    gameOver,
    clearedLines,
    currentPiece,
    nextPiece,
    firstPieceHidden,
    setFirstPieceHidden,
    resetGame,
    handleStartGame,
    togglePause,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};
