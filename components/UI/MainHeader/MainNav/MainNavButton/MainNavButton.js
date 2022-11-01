import React from "react";
import classes from "./MainNavButton.module.css";

const MainNavButton = (props) => {
  return (
    <button className={classes["main-nav__button"]} onClick={props.onClick}>
      <span>YC</span>
    </button>
  );
};

export default MainNavButton;
