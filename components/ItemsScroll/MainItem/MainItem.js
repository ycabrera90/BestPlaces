import React, { useContext, useEffect } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import useDOM_helper from "../../../hooks/useDOM_helper";
import classes from "./MainItem.module.css";

function MainItem({ id, image, title, onClick, dueEvent, isFirtElement }) {
  // <-- dueEvent can be: imgClick, wheel, arrowsClick

  const visibility = useContext(VisibilityContext);
  const { screen } = useDOM_helper();

  const clickHandler = () => {
    return onClick(visibility);
  };

  // auto go to the first not emty element if you open the page on mobile screens
  useEffect(() => {
    setTimeout(() => {
      if (isFirtElement && screen.orientation === "portrait") {
        clickHandler();
      }
    }, 500);
  }, []);

  // auto hightlighting center items when click items or when you are on mobile screens
  let highlighted = false;
  if (dueEvent === "imgClick" || screen.orientation === "portrait") {
    const visibilityItems = visibility.visibleElements; 
    const visibilityItemsLength = visibilityItems.length;
    if (visibilityItemsLength === 1) {
      highlighted = visibility.isItemVisible(id);
    } else if (visibilityItemsLength % 2 !== 0) {
      if (id === visibilityItems[Math.floor(visibilityItemsLength / 2)]) {
        highlighted = true;
      }
    }
  }

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      onClick={clickHandler}
      style={{
        visibility: image ? "visible" : "hidden",
      }}
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

export default MainItem;
