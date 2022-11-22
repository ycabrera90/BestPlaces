import { FC, MouseEventHandler } from "react";
import styles from "./ToggleButton.module.css";

export interface IToggleButton {
  onClick: MouseEventHandler;
  expanded: boolean;
}

const ToggleButton: FC<IToggleButton> = ({ onClick, expanded }) => {
  const mode = expanded ? styles["expanded"] : "";

  return (
    <button
      className={[styles["toggle-button"], mode].join(" ")}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
