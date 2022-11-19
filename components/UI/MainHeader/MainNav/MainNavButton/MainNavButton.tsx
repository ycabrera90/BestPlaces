import { FC } from "react";
import classes from "./MainNavButton.module.css";



const MainNavButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={classes["main-nav__button"]} onClick={onClick}>
      <span>YC</span>
    </button>
  );
};



export default MainNavButton;
