import { FC, useContext, useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styles from "./LeftArrow.module.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const LeftArrow: FC = () => {
  const { getPrevElement, isFirstItemVisible, scrollToItem, visibleElements, initComplete } = 
    useContext<scrollVisibilityApiType>(VisibilityContext);
  
  const [disabled, setDisabled] = useState<boolean>(
    !initComplete || (initComplete && isFirstItemVisible)
  );

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  const clickHandler = () => {
    return scrollToItem(getPrevElement(), "smooth", "center");
  };

  return (
    <>
      {!disabled && (
        <div className={styles["left-arrow"]}>
          <button
            className={`${styles["arrow-button"]} ${styles ? styles : ""}`}
            onClick={clickHandler}
          >
            <FaAngleDoubleLeft />
          </button>
        </div>
      )}
    </>
  );
};

export default LeftArrow;
