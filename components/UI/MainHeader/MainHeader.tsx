import { useState } from "react";

import BpIcon from "../BpIcon/BpIcon";
import ToggleButton from "./ToggleButton/ToggleButton";
import MainNav from "./MainNav/MainNav";

import classes from "./MainHeader.module.css";



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
      <ToggleButton
        expanded={isMainNavExpanded}
        onClick={toggleButtonClicHandler}
      />
      <MainNav
        onBackdropClick={backdropClickHandler}
        isExpanded={isMainNavExpanded}
      />
    </header>
  );
};



export default MainHeader;
