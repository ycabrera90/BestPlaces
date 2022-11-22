import { useState } from "react";

import SmLogoIcon from "../../icons/SmLogo/SmLogoIcon";
import ToggleButton from "../../buttons/Toggle/ToggleButton";
// import MainNav from "./MainNav/MainNav";
import MainNavBar from "../../navigation/MainNavBar/MainNavBar";

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
      {/* commentes while building */}
      {/* <ToggleButton
        expanded={isMainNavExpanded}
        onClick={toggleButtonClicHandler}
      />
      <MainNavBar
        onBackdropClick={backdropClickHandler}
        isExpanded={isMainNavExpanded}
      /> */}
    </header>
  );
};



export default MainHeader;
