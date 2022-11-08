import React, { useContext, useEffect, useState, memo } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import useDOM_helper from "../../../hooks/useDOM_helper";
import classes from "./MainItem.module.css";

let isValidDOM_values = false;


function MainItem({ id, image, title, onClick, onBackdrop, dueEvent, isFirtElement }) {
  // <-- dueEvent can be: imgClick, wheel, arrowsClick
  const [highlighted, setHighlighted] = useState(false);
  const visibility = useContext(VisibilityContext);
  const { screen } = useDOM_helper();

  const goToItem = () => onClick(visibility);
  
  // detect if useDOM_helper give us valid values due to window object
  useEffect(() => {
    if (screen.orientation) {
      isValidDOM_values = true;
    }
  }, [screen.orientation]);

  // if yo change to portrait mode without select any image, you go automatically to the first element you saw in the last view.
  useEffect(() => {
    let timeBeforeGo;
    if (isValidDOM_values && highlighted) {
      timeBeforeGo = setTimeout(() => {
        goToItem();
      }, 500);
    }
    return () => clearTimeout(timeBeforeGo);
  }, [screen.orientation]);

  // auto select the firt highlighted element when you go to the portrait orientation of your screen
  useEffect(() => {
    let timeBeforeGo;
    if (
      isValidDOM_values &&
      screen.orientation === "portrait" &&
      dueEvent !== "imgClick" &&
      visibility.visibleElements[0] === id
    ) {
      timeBeforeGo = setTimeout(() => {
        goToItem();
      }, 500);
    }
    return () => clearTimeout(timeBeforeGo);
  }, [screen.orientation]);

  // auto hightlighting center items when click items or when you are on mobile screens
  useEffect(() => {
    if (isValidDOM_values) {
      setHighlighted(false);
      if (dueEvent === "imgClick" || screen.orientation === "portrait") {
        const visibilityItems = visibility.visibleElements;
        const visibilityItemsLength = visibilityItems.length;
        if (visibilityItemsLength === 1) {
          setHighlighted(visibility.isItemVisible(id));
        } else if (visibilityItemsLength % 2 !== 0) {
          setHighlighted(
            id === visibilityItems[Math.floor(visibilityItemsLength / 2)]
          );
        }
      }
    }
  }, [
    dueEvent,
    screen.orientation,
    visibility.visibleElements,
    visibility.isItemVisible,
  ]);

  // drive the click on image and on backdrop
  const backdropClickHandler = () => {
    if (highlighted && screen.orientation === "landscape") {
      setHighlighted(false);
      onBackdrop();
    } else{
      onClick(visibility)
      setTimeout(() => {
        if (!highlighted) {
          setHighlighted(true);
        }
      }, 200);
    }
  };

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      // onClick={() => onClick(visibility)}
      style={{ visibility: image ? "visible" : "hidden" }}
    >
      <div
        className={`${classes.fog} ${highlighted ? classes.highlighted : ""} `}
        onClick={backdropClickHandler}
      >
        {/* <h1 style={{ opacity: highlighted ? 1 : 0 }}>{title}</h1> */}
      </div>
      <img
        className={`${classes.img} ${highlighted ? classes.highlighted : ""}`}
        src={image}
        alt={title}
      />
    </div>
  );
}

// export default memo(MainItem);
export default MainItem;
