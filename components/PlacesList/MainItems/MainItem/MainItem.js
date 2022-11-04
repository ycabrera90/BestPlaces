import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import classes from "./MainItem.module.css";

function MainItem({ id, image, title, onClick }) {
  const visibility = React.useContext(VisibilityContext);
  // const visible = visibility.isItemVisible(id);
  const visible = id === "6363f4374ffdad97440c77f0";

  // console.log(id);

  const imgClasses = `${classes.img} ${visible ? classes.visible : ""}`;

  return (
    <div
      role="button"
      className={classes["imagen-container"]}
      onClick={() => onClick(visibility)}
    >
      <div className={classes.fog}></div>
      <img className={imgClasses} src={image} alt={title} />
    </div>
  );
}

export default MainItem;
