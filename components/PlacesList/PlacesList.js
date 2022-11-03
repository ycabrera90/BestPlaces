import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import PlaceItem from "./PlaceItem/PlaceItem";
import ListContainer from "./ListContainer/ListContainer";
import { onWheel } from "../../helpers/scrollMenu";
import classes from "./PlacesList.module.css";

function PlacesList({ meetups }) {
  return (
    <div className={classes["items-container"]}>
      <ListContainer ulId="u1">
        <ScrollMenu>
          {meetups.map((meetup) => (
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
        <ScrollMenu onWheel={onWheel}>
          {meetups.map((meetup) => (
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
          {meetups.map((meetup) => (
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
    </div>
  );
}

export default PlacesList;
