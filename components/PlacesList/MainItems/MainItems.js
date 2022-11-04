import React, { useContext } from "react";

import usePreventBodyScroll from "../../../hooks/usePreventBodyScroll";
import classes from "./MainItems.module.css";

const MainItems = ({ children, dragStop }) => {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <>
      <div
        className={classes["main-items_container"]}
        onMouseLeave={dragStop}
      >
        {children}
      </div>
    </>
  );
};

export default MainItems;
