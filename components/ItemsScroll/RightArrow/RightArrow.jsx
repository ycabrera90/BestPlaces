import { useContext, useState, useEffect, FC, ReactNode } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaAngleDoubleRight } from "react-icons/fa";

import ArrowButton from "../ArrowButton/ArrowButton";
import classes from "./RightArrow.module.css";



const RightArrow = ({ onClick }) => {
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

  const clickHandler = () => {
    return scrollToItem(getNextElement(), "smooth", "center");
  };

  // go to the first scroll elements for fill the entery screen
  useState(() => {
    setTimeout(() => {
      clickHandler();
    }, 500);
  }, []);

  return (
    <ArrowButton
      disabled={disabled}
      onClick={clickHandler}
      className={classes["right-arrow"]}
    >
      <FaAngleDoubleRight />
    </ArrowButton>
  );
};



export default RightArrow;