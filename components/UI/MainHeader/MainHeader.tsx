import { useState } from "react";

import SmLogoIcon from "../../icons/SmLogo/SmLogoIcon";
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
      <SmLogoIcon description="Places" />
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
