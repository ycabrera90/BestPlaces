import { FC, useState } from "react";
import SmLogoIcon from "../../icons/SmLogo/SmLogoIcon";
import useDOM from "@/hooks/useDOM";
import ToggleButton from "@/components/buttons/Toggle/ToggleButton";
import styles from "./MainHeader.module.css";

const MainHeader: FC = () => {
  const { screen } = useDOM();

  console.log(screen.size?.width);
  
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
      {screen.size.width < 640 && (
        <ToggleButton
          expanded={isMainNavExpanded}
          onClick={toggleButtonClicHandler}
        />
      )}
      {/* <MainNavBar
        onBackdropClick={backdropClickHandler}
        isExpanded={isMainNavExpanded}
      /> */}
    </header>
  );
};

export default MainHeader;
