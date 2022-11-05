import React from "react";
import Link from "next/link";

import classes from "./MainNavItem.module.css";

const MainNavItem = (props) => {
  return (
    <li className={classes["main-nav_item"]}>
      <Link href={props.to}>{props.children}</Link>
    </li>
  );
};

export default MainNavItem;
