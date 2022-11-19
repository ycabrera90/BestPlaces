import { FC, ReactNode } from "react";
import classes from "./ArrowButton.module.css";

type ArrowButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className: string;
}



const ArrowButton: FC<ArrowButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`${classes["arrow-button"]} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};



export default ArrowButton