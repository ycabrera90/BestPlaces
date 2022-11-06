import React, { useContext, useState, useEffect } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import classes from "./ArrowButtons.module.css";

const ArrowButtons = ({ children, disabled, onClick, className }) => {
  return (
    <button
      className={`${classes["arrow-button"]} ${className ? className : ""}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        opacity: disabled ? "0" : "1",
      }}
    >
      {children}
    </button>
  );
};

export const LeftArrow = () => {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
  } = useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  const clickHandler = () => scrollToItem(getPrevElement(), "smooth", "center");
  return (
    <ArrowButtons
      disabled={disabled}
      onClick={clickHandler}
      className={classes["left-arrow"]}
    >
      <FaAngleDoubleLeft />
    </ArrowButtons>
  );
};

export const RightArrow = () => {
  const { getNextElement, isLastItemVisible, scrollToItem, visibleElements } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleElements.length && isLastItemVisible
  );
  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  const clickHandler = () => scrollToItem(getNextElement(), "smooth", "center");
  return (
    <ArrowButtons
      disabled={disabled}
      onClick={clickHandler}
      className={classes["right-arrow"]}
    >
      <FaAngleDoubleRight />
    </ArrowButtons>
  );
};
