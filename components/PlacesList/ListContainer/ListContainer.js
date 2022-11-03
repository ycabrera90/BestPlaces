import React, { useEffect } from "react";

import {
  getMaxScrollItems,
  setScrollPosition,
} from "../../../helpers/scrollMenu";
import classes from "./ListContainer.module.css";

let scrollU1Position = 0; // <--- the initial value is 0
let scrollU1increasing = true;

let scrollU3Position = 0; // <--- the initial value is 0
let scrollU3increasing = true;
let firstUl3Mount = true;

const ListContainer = ({ ulId, children }) => {
  useEffect(() => {
    const [ul1DOM, ul2DOM, ul3DOM] = document.querySelectorAll(
      ".react-horizontal-scrolling-menu--scroll-container"
    );

    const [maxScrollUl1, maxScrollUl2, maxScrollUl3] = getMaxScrollItems([
      ul1DOM,
      ul2DOM,
      ul3DOM,
    ]);

    setInterval(() => {
      if (ulId === "u1") {
        [scrollU1Position, scrollU1increasing] = setScrollPosition(
          ul1DOM,
          scrollU1increasing,
          scrollU1Position,
          maxScrollUl1
        );
      }

      if (ulId === "u3") {
        [scrollU3Position, scrollU3increasing, firstUl3Mount] =
          setScrollPosition(
            ul3DOM,
            scrollU3increasing,
            scrollU3Position,
            maxScrollUl3,
            false,
            firstUl3Mount
          );
      }
    }, 50); // <--- whit a time less than 50ms the scroll is not smooth
  }, []);

  return <ul className={classes["list-container"]}>{children}</ul>;
};

export default ListContainer;
