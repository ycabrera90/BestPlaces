import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import ListContainer from "../../PlacesList/ListContainer/ListContainer";
import PlaceItem from "../../PlacesList/PlaceItem/PlaceItem";
import classes from "./BackgroundImages.module.css";

const BackgroundImages = ({ images }) => {
  const placeListU1 = [...images];
  const placeListU2 = [...images];
  const placeListU3 = [...images];

  // the arrays were disordered
  // placeListU1.sort((a, b) => 1 - Math.random() - 0.5);
  // placeListU2.sort((a, b) => 1 - Math.random() - 0.5);
  // placeListU3.sort((a, b) => 1 - Math.random() - 0.5);

  return (
    <section className={classes["items-container"]}>
      <div className={classes.fog}></div>
      <ListContainer ulId="u1">
        <ScrollMenu>
          {placeListU1.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              ulId="u1"
              image={place.image}
              title={place.title}
              address={place.address}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
      <ListContainer ulId="u2">
        <ScrollMenu>
          {placeListU1.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              ulId="u2"
              image={place.image}
              title={place.title}
              address={place.address}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
      <ListContainer ulId="u3">
        <ScrollMenu>
          {placeListU3.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              ulId="u3"
              image={place.image}
              title={place.title}
              address={place.address}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
    </section>
  );
};

export default BackgroundImages;
