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

export function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

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

  scrollPosition = scrollState ? (scrollPosition += speed) : (scrollPosition -= speed);

  ulDOM.scroll(scrollPosition, 0);
  return [scrollPosition, scrollState, false];
};
