import { useContext, useEffect, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import ArrowButton from "../ArrowButton/ArrowButton";
import classes from "./LeftArrow.module.css";



type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const LeftArrow  = () => {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete,
  } = useContext<scrollVisibilityApiType>(VisibilityContext);
  
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
        <ArrowButton 
          onClick={clickHandler} 
          className={classes["left-arrow"]}
        >
          <FaAngleDoubleLeft />
        </ArrowButton>
      )}
    </>
  );
};



export default LeftArrow;
