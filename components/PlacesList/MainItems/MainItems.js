import React, { useEffect } from "react";
import classes from "./MainItems.module.css";

const MainItems = ({ ulId, children }) => {
  return <ul className={classes["list-container"]}>{children}</ul>;
};

export default MainItems;
