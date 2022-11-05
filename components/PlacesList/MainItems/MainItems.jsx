import React from "react";
import { ScrollMenu, getItemsPos } from "react-horizontal-scrolling-menu";

import useDrag from "../../../hooks/useDrag";
import { onWheel } from "../../../helpers/scrollMenu";
import MainItem from "./MainItem/MainItem";
import classes from "./MainItems.module.css";

const MainItems = ({ places }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick =
    (itemId) =>
    ({ getItemById, scrollToItem }) => {
      if (dragging) {
        return false;
      }
      scrollToItem(getItemById(itemId), "smooth", "center", "nearest"); // <--- this is the line that makes the scroll to the center
    };

  const mouseUpHandler =
    ({ getItemById, scrollToItem, visibleItems }) =>
    () => {
      dragStop();
      const { center } = getItemsPos(visibleItems);
      scrollToItem(getItemById(center), "smooth", "center");
    };

  return (
    <div className={classes["main-items_container"]} onMouseLeave={dragStop}>
      <ScrollMenu
        options={{ throttle: 0 }}
        onMouseDown={() => dragStart}
        onMouseUp={mouseUpHandler}
        onMouseMove={handleDrag}
        onWheel={onWheel}
      >
        {places.map((place) => (
          <MainItem
            key={place.id}
            id={place.id}
            image={place.image}
            title={place.title}
            address={place.address}
            onClick={handleItemClick(place.id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MainItems;
