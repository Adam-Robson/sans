import React from "react";
import type { PreviewPieceProps } from "@tetriz/src/types/preview";
import "./preview.css";

export default function PreviewPiece({ shape, color }: PreviewPieceProps) {
  return (
    <div className="preview-container">
      <div className="preview-title">Next Piece</div>
      <div className="preview-piece">
        {shape.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`preview-cell ${cell === 0 ? "" : "active"}`}
              style={{
                backgroundColor: cell === 0 ? "transparent" : color,
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
