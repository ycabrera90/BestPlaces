import React from "react";
import { ScrollMenu, getItemsPos } from "react-horizontal-scrolling-menu";

import { onWheel } from "../../helpers/scrollMenu";
import useDrag from "../../hooks/useDrag";
import MainItem from "./MainItem/MainItem";
import { LeftArrow, RightArrow } from "./ArrowButtons/ArrowButtons";

import classes from "./ItemsScroll.module.css";

const ItemsScroll = ({ places }) => {
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
      console.log('clicked');
    };

  const mouseUpHandler =
    ({ getItemById, scrollToItem, visibleItems }) =>
    () => {
      dragStop();
      const { center } = getItemsPos(visibleItems);
      scrollToItem(getItemById(center), "smooth", "center");
    };

  return (
    <>
      <div className={classes["main-items_container"]} onMouseLeave={dragStop}>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
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
    </>
  );
};

export default ItemsScroll;
