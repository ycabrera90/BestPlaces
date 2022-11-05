import React, { useContext } from "react";
import {
  ScrollMenu,
  getItemsPos,
  slidingWindow,
} from "react-horizontal-scrolling-menu";

import useDrag from "../../../hooks/useDrag";
import usePreventBodyScroll from "../../../hooks/usePreventBodyScroll";
import MainItem from "./MainItem/MainItem";
import classes from "./MainItems.module.css";

const MainItems = ({ places }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  function onWheel({ getItemById, items, visibleItems, scrollToItem }, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      const nextGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
      ).next();
      const { center } = getItemsPos(nextGroupItems);
      scrollToItem(getItemById(center), "smooth", "center");
    } else if (ev.deltaY > 0) {
      const prevGroupItems = slidingWindow(
        items.toItemsKeys(),
        visibleItems
      ).prev();
      const { center } = getItemsPos(prevGroupItems);
      scrollToItem(getItemById(center), "smooth", "center");
    }
  }

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

  return (
    <div className={classes["main-items_container"]} onMouseLeave={dragStop}>
      <ScrollMenu
        onWheel={onWheel}
        onMouseDown={() => dragStart}
        onMouseUp={({ getItemById, scrollToItem, visibleItems }) =>
          () => {
            dragStop();
            const { center } = getItemsPos(visibleItems);
            scrollToItem(getItemById(center), "smooth", "center");
          }}
        options={{ throttle: 0 }}
        onMouseMove={handleDrag}
      >
        {places.map((meetup) => (
          <MainItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            onClick={handleItemClick(meetup.id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default MainItems;
