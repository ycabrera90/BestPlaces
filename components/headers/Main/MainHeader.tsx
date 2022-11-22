import { FC, useState } from "react";
import SmLogoIcon from "../../icons/SmLogo/SmLogoIcon";
import styles from "./MainHeader.module.css";

const MainHeader: FC = () => {
  const [isMainNavExpanded, setIsMainNavExpanded] = useState(false);

  const toggleButtonClicHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  const backdropClickHandler = () => {
    setIsMainNavExpanded((prevState) => !prevState);
  };

  return (
    <header className={styles["main-header"]}>
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
