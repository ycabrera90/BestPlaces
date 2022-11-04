import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import usePreventBodyScroll from "../../../hooks/usePreventBodyScroll";
import classes from "./MainItems.module.css";

const MainItems = ({ children }) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <div
      className={classes["main-items_container"]}
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
    >
      {children}
    </div>
  );
};

export default MainItems;
