import React from "react";
import { useState } from "react";
import classes from "./MainHeader.module.css";

import BpIcon from "../BpIcon/BpIcon";
import ToggleButton from "./ToggleButton/ToggleButton";
import MainNav from "./MainNav/MainNav";

const MainHeader = () => {
  const [isMainNavExpanded, setIsMainNavExpanded] = useState(false);

  const toggleButtonClicHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  return (
    <header className={classes["main-header"]}>
      <BpIcon />
      <ToggleButton onClick={toggleButtonClicHandler} />
      <MainNav
        onBackdropClick={backdropClickHandler}
        isExpanded={isMainNavExpanded}
      />
    </header>
  );
};

export default MainHeader;
