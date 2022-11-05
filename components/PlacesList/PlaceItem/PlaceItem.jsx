import React from "react";
import classes from "./PlaceItem.module.css";

function PlaceItem({ id, ulId, image, title }) {
  return <img className={classes.img} src={image} alt={title} />;
}

export default React.memo(PlaceItem);
