import React, { useContext, useEffect, useState, memo } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import useDOM_helper from "../../../hooks/useDOM_helper";
import classes from "./MainItem.module.css";

let isValidDOM_values = false;


function MainItem({ id, image, title, onClick }) {
  const [highlighted, setHighlighted] = useState(false);
  const { screen } = useDOM_helper();

  const visibility = useContext(VisibilityContext);
  const { visibleElements, isItemVisible } = visibility;
  
  const goToItem = () => onClick(visibility);

  const clickItemHandler = () => {
    if (!highlighted) {
      setTimeout(() => {
        setHighlighted(true);
      }, 200);
    }
    goToItem();
  };

  const backDropClickHandler = () => {
    console.log("backDropClickHandler");
    setHighlighted(false);
  };
  
  // detect if useDOM_helper give us valid values due to window object
  useEffect(() => {
    if (screen.orientation) {
      isValidDOM_values = true;
    }
  }, [screen.orientation]);

  // if you change the orientation of you screen yo go to the item higlighted before the change
  useEffect(() => {
    let timeBeforeGo;
    let timeBeforeHighlight;

    if (isValidDOM_values && highlighted) {
      timeBeforeGo = setTimeout(() => {
        goToItem();
      }, 500);

      timeBeforeHighlight = setTimeout(() => {
        setHighlighted(true);
      }, 1000);
    }
    return () => {
      clearTimeout(timeBeforeGo);
      clearTimeout(timeBeforeHighlight);
    };
  }, [screen.orientation]);

  // if you change the orientation of you screen without higlighted elements, yo go to the first visible item before the change
  useEffect(() => {
    let timeBeforeGo;
    if (
      isValidDOM_values &&
      visibleElements[0] === id
    ) {
      timeBeforeGo = setTimeout(() => {
        goToItem();
      }, 500);
    }
    return () => clearTimeout(timeBeforeGo);
  }, [screen.orientation]);

  // auto hightlighting center items when click items or when you are on mobile screens
  useEffect(() => {
    if (isValidDOM_values && screen.orientation === "portrait") {
      setHighlighted(isItemVisible(id));
    }
  }, [visibleElements, screen.orientation]);

  // remove the hightlighting when the item is not in the center of the screen
  useEffect(() => {
    if (isValidDOM_values && visibleElements.length % 2 !== 0) {
      const isCenterItem = visibleElements[Math.floor(visibleElements.length / 2)] === id;
      if (!isCenterItem) {
        setHighlighted(false);
      }
    }
  }, [visibleElements]);

  return (
    <>
      <div 
        className={`${classes.backdrop} ${highlighted ? classes.show : ""}`}
        onClick={backDropClickHandler}
      />
      <div
        role="button"
        className={`${classes["item-container"]} ${highlighted ? classes.highlighted : ""}`}
        onClick={clickItemHandler}
        style={{ visibility: image ? "visible" : "hidden" }}
      >
        <img className={classes.img} src={image} alt={title} />
        <div className={classes.fog}>
          <h1 style={{ opacity: highlighted ? 1 : 0 }}>{title}</h1>
        </div>
      </div>
    </>
  );
}

// export default memo(MainItem);
export default MainItem;
