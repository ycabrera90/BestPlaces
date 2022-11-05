import React, { useContext } from "react";
import classes from "./MainNav.module.css";

import MainNavItem from "./MainNavItem/MainNavItem";
import { keyGen } from "../../../../util/keyGen";

const MainNav = ({ isExpanded, onBackdropClick }) => {
  const navBarClasses = isExpanded
    ? `${classes["nav-bar"]} ${classes["expanded"]}`
    : `${classes["nav-bar"]}`;

  const backdropClasses = isExpanded
    ? `${classes["backdrop"]} ${classes["expanded"]}`
    : `${classes["backdrop"]}`;

  const mainNavItems = [
    // { title: "ALL PLACES", path: "/" },
    // { title: "ADD PLACE", path: "/new-place" },
  ];

  return (
    <>
      <div className={backdropClasses} onClick={onBackdropClick}></div>
      <nav className={navBarClasses}>
        <ul>
          {mainNavItems.map((item) => (
            <MainNavItem key={keyGen()} to={item.path}>
              {item.title}
            </MainNavItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MainNav;
