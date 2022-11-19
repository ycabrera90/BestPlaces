import React, { FC, ReactNode } from "react";
import Link from "next/link";

import classes from "./MainNavItem.module.css";



const MainNavItem: FC<{ to: string; children: ReactNode }> = ({
  to,
  children,
}) => {
  return (
    <li className={classes["main-nav_item"]}>
      <Link href={to}>{children}</Link>
    </li>
  );
};



export default MainNavItem;
