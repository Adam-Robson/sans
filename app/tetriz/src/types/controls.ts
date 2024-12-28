export interface IStartButtonProps {
  handleStartGame: () => void;
}

export interface IPauseButtonProps {
  togglePause: () => void;
}

export interface IResetButtonProps {
  handleResetGame: () => void;
}

export interface IButtonProps {
  onClick: () => void;
  text: string;
}

export interface IControlsProps {
  togglePause?: () => void;
  resetGame: () => void;
  running: boolean;
  handleStartGame: () => void;
}
