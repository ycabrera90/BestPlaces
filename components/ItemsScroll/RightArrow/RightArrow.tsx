import { useContext, useState, useEffect, ContextType } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleDoubleRight } from "react-icons/fa";

import ArrowButton from "../ArrowButton/ArrowButton";
import classes from "./RightArrow.module.css";

type scrollCtxType = ContextType<typeof VisibilityContext>;



const RightArrow = () => {
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
        <ArrowButton
          onClick={clickHandler}
          className={classes["right-arrow"]}
        >
          <FaAngleDoubleRight />
        </ArrowButton>
      )}
    </>
  );
};



export default RightArrow;