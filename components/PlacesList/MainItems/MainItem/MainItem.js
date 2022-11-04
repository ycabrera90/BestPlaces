import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

import classes from "./MainItem.module.css";

function MainItem({ id, image, title }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(id);

  const imgClasses = `${classes.img} ${visible ? classes.visible : ""}`;

  return <img className={imgClasses} src={image} alt={title} />;
}

export default MainItem;
