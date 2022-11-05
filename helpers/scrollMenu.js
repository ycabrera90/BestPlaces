import { getItemsPos, slidingWindow } from "react-horizontal-scrolling-menu";

export const getMaxScrollItems = (domListElements) => {
  let maxScrollListItems = [];

  domListElements.forEach((domElement) => {
    const containerWidth = domElement.getBoundingClientRect().width;

    const itemsDOM = domElement.querySelectorAll(
      ".react-horizontal-scrolling-menu--item "
    );
    let itemsWidth = 0;
    itemsDOM.forEach((item) => {
      itemsWidth += item.getBoundingClientRect().width;
    });

    maxScrollListItems.push(itemsWidth - containerWidth);
  });

  return maxScrollListItems;
};

export const setScrollPosition = (
  ulDOM,
  scrollState,
  scrollPosition,
  maxScroll,
  forward = true,
  firsMount = false,
  speed = 1
) => {
  if (firsMount) {
    scrollPosition = !forward ? maxScroll : 0;
  }

  scrollState = scrollPosition >= maxScroll ? false : scrollState;
  scrollState = scrollPosition <= 0 ? true : scrollState;

  scrollPosition = scrollState
    ? (scrollPosition += speed)
    : (scrollPosition -= speed);

  ulDOM.scroll(scrollPosition, 0);
  return [scrollPosition, scrollState, false];
};

export const onWheel = (
  { getItemById, items, visibleItems, scrollToItem },
  ev
) => {
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
};

