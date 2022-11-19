import { FC, MouseEvent } from "react";
import { ScrollMenu, getItemsPos, VisibilityContext } from "react-horizontal-scrolling-menu";

import useDrag from "../../hooks/useDrag";
import MainItem from "./MainItem/MainItem";
import { onWheel } from "../../helpers/scrollMenu";
import { Places } from "../../models";

import LeftArrow from "./LeftArrow/LeftArrow";
import RightArrow from "./RightArrow/RightArrow";
import classes from "./ItemsScroll.module.css";



type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const ItemsScroll: FC<{ places: Places[] }> = (props) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag =
    ({ scrollContainer }: scrollVisibilityApiType) =>
    (ev: MouseEvent) =>
      dragMove(ev, (posDiff: number) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  const handleItemClick =
    (itemId: string) => (visibilityCtx: scrollVisibilityApiType) => {
      const { getItemById, scrollToItem } = visibilityCtx;
      if (dragging) {
        return false;
      }
      scrollToItem(getItemById(itemId), "smooth", "center", "nearest"); // <--- this is the line that makes the scroll to the center
    };

  const mouseUpHandler = (visibilityCtx: scrollVisibilityApiType) => () => {
    const { getItemById, scrollToItem, visibleItems } = visibilityCtx;
    dragStop();
    const { center } = getItemsPos(visibleItems);
    scrollToItem(getItemById(center), "smooth", "center");
  };

  const onWheelHandler = (apyObj: scrollVisibilityApiType, ev: MouseEvent) => {
    onWheel(apyObj, ev);
  };

  // Insert of a ghost element at the beginning and end of the scroll
  let adjustedPlaces = [...props.places];
  const emptyPlace: Places = new Places("endEmtyItem", null, null, null);
  adjustedPlaces.unshift(emptyPlace);
  adjustedPlaces.push(emptyPlace);

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
            onClick={handleItemClick(place.id)}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ItemsScroll;
