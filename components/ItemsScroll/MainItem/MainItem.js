import React, { useContext, useEffect, useState, memo } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import useDOM_helper from "../../../hooks/useDOM_helper";
import classes from "./MainItem.module.css";

let isFirstValidDOM_values = true;

function MainItem({ id, image, title, onClick, dueEvent, isFirtElement }) {
  // <-- dueEvent can be: imgClick, wheel, arrowsClick
  const [highlighted, setHighlighted] = useState(false);
  const visibility = useContext(VisibilityContext);
  const { screen } = useDOM_helper();

  const goToItem = () => onClick(visibility);

  // auto go to the first not emty element if you open the page on mobile screens
  useEffect(() => {
    let timeBeforeGo;
    if (isFirstValidDOM_values) {
      if (isFirtElement && screen.orientation === "portrait") {
        setTimeout(() => {
          goToItem();
          isFirstValidDOM_values = false;
        }, 500);
      }
    }
    return () => clearTimeout(timeBeforeGo);
  }, [isFirtElement, screen.orientation]);

  // auto go to the the last highlighted element when you change the orientation of your screen
  useEffect(() => {
    let timeBeforeGo;
    if (!isFirstValidDOM_values) {
      if (highlighted) {
        timeBeforeGo = setTimeout(() => {
          goToItem();
        }, 500);
      }
    }
    return () => clearTimeout(timeBeforeGo);
  }, [screen.orientation]);

  // auto hightlighting center items when click items or when you are on mobile screens
  useEffect(() => {
    if (!isFirstValidDOM_values) {
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

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      onClick={() => onClick(visibility)}
      style={{ visibility: image ? "visible" : "hidden" }}
    >
      <div
        className={`${classes.fog} ${highlighted ? classes.highlighted : ""} `}
      />
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
