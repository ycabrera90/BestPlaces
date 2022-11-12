import { ScrollMenu, getItemsPos } from "react-horizontal-scrolling-menu";

import useDrag from "../../hooks/useDrag";
import MainItem from "./MainItem/MainItem";
import { onWheel } from "../../helpers/scrollMenu";

import { LeftArrow, RightArrow } from "./ArrowButtons/ArrowButtons";

import classes from "./ItemsScroll.module.css";



const ItemsScroll = ({ places }) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag = ({ scrollContainer }) => (ev) => dragMove(ev, (posDiff) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff;
    }
  });

  const handleItemClick = (itemId) => ({ getItemById, scrollToItem }) => {
    if (dragging) {
      return false;
    }
    scrollToItem(getItemById(itemId), "smooth", "center", "nearest"); // <--- this is the line that makes the scroll to the center
  };

  const mouseUpHandler = ({ getItemById, scrollToItem, visibleItems }) => () => {
    dragStop();
    const { center } = getItemsPos(visibleItems);
    scrollToItem(getItemById(center), "smooth", "center");
  };

  const onWheelHandler = (apyObj, ev) => {
    onWheel(apyObj, ev);
  };

  let adjustedPlaces = [...places];

  // insert a transparent first element en the scroll for adjustment
  adjustedPlaces.unshift({
    title: null,
    address: null,
    image: null,
    id: "startEmtyItem",
  });

  // insert a transparent end element en the scroll for adjustment
  adjustedPlaces.push({
    title: null,
    address: null,
    image: null,
    id: "endEmtyItem",
  });

  return (
    <div className={classes["main-items_container"]} onMouseLeave={dragStop}>
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        options={{ throttle: 0 }}
        onMouseDown={() => dragStart}
        onMouseUp={mouseUpHandler}
        onMouseMove={handleDrag}
        onWheel={onWheelHandler}
      >
        {adjustedPlaces.map((place) => (
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

export default ItemsScroll;
