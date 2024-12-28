import type { IStatsProps } from "@tetriz/src/types/game";
import "./stats.css";

export default function Stats({ clearedLines, level }: IStatsProps) {
  return (
    <div className="stats-container">
      <p className="score">Score: {clearedLines}</p>
      <p className="level">Level: {level}</p>
    </div>
  );
}
