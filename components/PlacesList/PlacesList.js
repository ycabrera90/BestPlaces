import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import PlaceItem from "./PlaceItem/PlaceItem";
import ListContainer from "./ListContainer/ListContainer";
import MainItems from "./MainItems/MainItems";
import MainItem from "./MainItems/MainItem/MainItem";
import { onWheel } from "../../helpers/scrollMenu";
import classes from "./PlacesList.module.css";

function PlacesList({ places }) {
  const placeListU1 = [...places];
  const placeListU2 = [...places];
  const placeListU3 = [...places];

  // the arrays were disordered
  // placeListU1.sort((a, b) => 1 - Math.random() - 0.5);
  // placeListU2.sort((a, b) => 1 - Math.random() - 0.5);
  // placeListU3.sort((a, b) => 1 - Math.random() - 0.5);

  return (
    <>
      <section className={classes["items-container"]}>
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
      </section>
      <section className={classes["main-items-container"]}>
        <MainItems ulId="u2">
          <ScrollMenu onWheel={onWheel}>
            {placeListU2.map((meetup) => (
              <MainItem
                key={meetup.id}
                id={meetup.id}
                ulId="u2"
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
              />
            ))}
          </ScrollMenu>
        </MainItems>
      </section>
    </>
  );
}

export default PlacesList;
