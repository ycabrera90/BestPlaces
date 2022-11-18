import { useContext, useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import ArrowButton from "../ArrowButton/ArrowButton";
import classes from "./LeftArrow.module.css";



const LeftArrow = () => {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
  } = useContext(VisibilityContext);
  
  const [disabled, setDisabled] = useState(!initComplete || (initComplete && isFirstItemVisible));

  useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  const clickHandler = () => {
    return scrollToItem(getPrevElement(), "smooth", "center");
  };

  return (
    <ArrowButton
      disabled={disabled}
      onClick={clickHandler}
      className={classes["left-arrow"]}
    >
      <FaAngleDoubleLeft />
    </ArrowButton>
  );
};



export default LeftArrow;
