import { FC, WheelEvent, MouseEvent } from "react";
import { ScrollMenu, getItemsPos, VisibilityContext } from "react-horizontal-scrolling-menu";

import useDrag from "@/hooks/useDrag";
import ImageDetail from "../ImageDetail/ImageDetail";
import onWheel from "@/helpers/scrollMenu";
import Places from "@/types/Places";
import LeftArrow from "@/components/buttons/LeftArrow/LeftArrow";
import RightArrow from "@/components/buttons/RightArrow/RightArrow";
import styles from "./ImagesSroll.module.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
export interface IImagesSroll {
  places: Places[];
}

const ImagesSroll: FC<IImagesSroll> = (props) => {
  const { dragStart, dragStop, dragMove, dragging } = useDrag();

  const handleDrag = ({ scrollContainer }: scrollVisibilityApiType) => (ev: MouseEvent) => dragMove(ev, (posDiff: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += posDiff;
    }
  });

  const handleItemClick = (itemId: string) => (visibilityCtx: scrollVisibilityApiType) => {
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

  const onWheelHandler = (apyObj: scrollVisibilityApiType, ev: WheelEvent) => {
    onWheel(apyObj, ev);
  };

  // Insert of a ghost element at the beginning and end of the scroll
  const adjustedPlaces = [
    new Places("startEmtyItem", null, null, null),
    ...props.places,
    new Places("endEmtyItem", null, null, null),
  ];

  return (
    <div className={styles["main-items_container"]} onMouseLeave={dragStop}>
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
          <ImageDetail
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

export default ImagesSroll;
