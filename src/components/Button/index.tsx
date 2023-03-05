import React from "react";
import { CellState, CellValue } from "../../types";

import "./Button.scss";

interface ButtonProps {
  col: number;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
  red?: boolean;
  row: number;
  state: CellState;
  value: CellValue;
}

const Button: React.FC<ButtonProps> = ({
  col,
  onClick,
  onContext,
  red,
  row,
  state,
  value
}) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.visible) {
      if (value === CellValue.bomb) {
        return (
          <span className={`bomb ${red ? "bomb-red" : ""}`}></span>
         
        );
      } else if (value === CellValue.none) {
        return null;
      }

      return value;
    } else if (state === CellState.flagged) {
      return (
        <span className="flag">
         
        </span>
      );
    }
    else if (state === CellState.question) {
      return (
        <span className="question">
          
        </span>
      );
    }

    return null;
  };

  return (
    <div
      className={`Button ${
        state === CellState.visible ? "visible" : ""
      } value-${value} `}
      onClick={onClick(row, col)}
      onContextMenu={onContext(row, col)}
    >
      {renderContent()}
    </div>
  );
};

export default Button;