import { FC, ReactNode } from "react";
import classes from "./ArrowButton.module.css";



const ArrowButton: FC<{
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
  className: string;
}> = ({ children, disabled, onClick, className }) => {
  return (
    <button
      className={`${classes["arrow-button"]} ${className ? className : ""}`}
      disabled={disabled}
      onClick={onClick}
      style={{ opacity: disabled ? "0" : "1" }}
    >
      {children}
    </button>
  );
};



export default ArrowButton