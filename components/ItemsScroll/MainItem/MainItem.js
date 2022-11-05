import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import classes from "./MainItem.module.css";

function MainItem({ id, image, title, onClick }) {
  const visibility = React.useContext(VisibilityContext);
  let visible = false;
  // const visible = id === "6363f4374ffdad97440c77f0";
  // let visible = false;
  const visibilityItem = visibility.visibleElements;

  if (visibilityItem.length === 1) {
    console.log("only one item");
    visible = visibility.isItemVisible(id);
  } else if (visibility.visibleElements.length % 2 !== 0) {
    console.log("odd number of items");
    const middleItemIndex = Math.floor(visibility.visibleElements.length / 2);
    const middleItemId = visibilityItem[middleItemIndex];
    console.log("middleItemIndex", middleItemIndex);
    console.log("middleItemId", middleItemId);
    if(id === middleItemId) {
      visible = true;
    }
  } else {
    console.log("even number of items");
  }

  // if (visibility.visibleElements.length % 2 !== 0) {
  //   console.log("odd");
  //   const visibilityItem =
  //     // visibility.visibleElements[
  //     //   (visibility.visibleElements.length - 1) / 2 + 1
  //     // ];
  //     visibility.visibleElements;
  //   console.log(visibilityItem);
  //   // if (visibilityItem === id) {
  //   //   visible = true;
  //   // }
  // } else {
  //   // nada visible
  // }

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      onClick={() => onClick(visibility)}
    >
      <div className={`${classes.fog} ${visible ? classes.visible : ""}`}></div>
      <img
        className={`${classes.img} ${visible ? classes.visible : ""}`}
        src={image}
        alt={title}
      />
    </div>
  );
}

export default MainItem;
