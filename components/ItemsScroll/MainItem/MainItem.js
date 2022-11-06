import React, { useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import classes from "./MainItem.module.css";

function MainItem({ id, image, title, onClick }) {
  const visibility = useContext(VisibilityContext);
  const visibilityItems = visibility.visibleElements; //<-- array with visible items in the screen
  const visibilityItemsLength = visibilityItems.length;

  let highlighted = false;

  if (visibilityItemsLength === 1) {
    highlighted = visibility.isItemVisible(id);
  } else if (visibilityItemsLength % 2 !== 0) {
    if (id === visibilityItems[Math.floor(visibilityItemsLength / 2)]) {
      highlighted = true;
    }
  }

  // highlighted = false;

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      onClick={() => onClick(visibility)}
    >
      <div
        className={`${classes.fog} ${highlighted ? classes.highlighted : ""}`}
      ></div>
      <img
        className={`${classes.img} ${highlighted ? classes.highlighted : ""}`}
        src={image}
        alt={title}
      />
    </div>
  );
}

export default MainItem;
