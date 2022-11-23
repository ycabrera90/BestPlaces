import { FC, useContext, useState, useEffect, ContextType } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "./RightArrow.module.css";

type scrollCtxType = ContextType<typeof VisibilityContext>;

const RightArrow: FC = () => {
  const { getNextElement, isLastItemVisible, scrollToItem, visibleElements } =
    useContext<scrollCtxType>(VisibilityContext);

  const [disabled, setDisabled] = 
    useState(!visibleElements.length && isLastItemVisible);

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  const clickHandler = () => {
    return scrollToItem(getNextElement(), "smooth", "center");
  };

  // go to the first scroll elements for fill the entery screen
  useEffect(() => {
    setTimeout(() => {
      clickHandler();
    }, 500);
  }, []);

  return (
    <>
      {!disabled && (
        <div className={styles["right-arrow"]}>
          <button className={styles["arrow-button"]} onClick={clickHandler}>
            <FaAngleDoubleRight />
          </button>
        </div>
      )}
    </>
  );
};

export default RightArrow;
