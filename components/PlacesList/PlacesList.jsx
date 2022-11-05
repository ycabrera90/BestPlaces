import React from "react";
import {
  ScrollMenu,
  getItemsPos,
  slidingWindow,
} from "react-horizontal-scrolling-menu";

import PlaceItem from "./PlaceItem/PlaceItem";
import ListContainer from "./ListContainer/ListContainer";
import MainItems from "./MainItems/MainItems";
import MainItem from "./MainItems/MainItem/MainItem";
// import { onWheel } from "../../helpers/scrollMenu";
import useDrag from "../../hooks/useDrag";

import classes from "./PlacesList.module.css";

function PlacesList({ places }) {
  

  return (
    <>
      {/* <section className={classes["items-container"]}>
        <div className={classes.fog}></div>
        <ListContainer ulId="u1">
          <ScrollMenu>
            {placeListU1.map((meetup) => (
              <PlaceItem
                key={meetup.id}
                id={meetup.id}
                ulId="u1"
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
              />
            ))}
          </ScrollMenu>
        </ListContainer>
        <ListContainer ulId="u2">
          <ScrollMenu>
            {placeListU1.map((meetup) => (
              <PlaceItem
                key={meetup.id}
                id={meetup.id}
                ulId="u2"
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
              />
            ))}
          </ScrollMenu>
        </ListContainer>
        <ListContainer ulId="u3">
          <ScrollMenu>
            {placeListU3.map((meetup) => (
              <PlaceItem
                key={meetup.id}
                id={meetup.id}
                ulId="u3"
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
              />
            ))}
          </ScrollMenu>
        </ListContainer>
      </section> */}
      {/* <section className={classes["main-items-container"]}>
        <MainItems dragStop={dragStop}>
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
            {placeListU2.map((meetup) => (
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
        </MainItems>
      </section> */}
    </>
  );
}

export default PlacesList;
