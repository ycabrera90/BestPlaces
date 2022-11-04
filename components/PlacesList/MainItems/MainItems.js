import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import classes from "./MainItems.module.css";

const MainItems = ({ children }) => {
  return <ul className={classes["list-container"]}>{children}</ul>;
};

export default MainItems;
