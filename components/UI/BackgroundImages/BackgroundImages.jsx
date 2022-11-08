import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import ListContainer from "../../PlacesList/ListContainer/ListContainer";
import PlaceItem from "../../PlacesList/PlaceItem/PlaceItem";
import classes from "./BackgroundImages.module.css";

const BackgroundImages = ({ images }) => {
  return (
    <section className={classes["items-container"]}>
      <ListContainer ulId="u1">
        <ScrollMenu>
          {images.map((place) => (
            <PlaceItem
              key={place.id}
              image={place.image}
              title={place.title}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
      <ListContainer ulId="u2">
        <ScrollMenu>
          {images.map((place) => (
            <PlaceItem
              key={place.id}
              image={place.image}
              title={place.title}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
      <ListContainer ulId="u3">
        <ScrollMenu>
          {images.map((place) => (
            <PlaceItem
            key={place.id}
            image={place.image}
            title={place.title}
            />
          ))}
        </ScrollMenu>
      </ListContainer>
    </section>
  );
};

export default BackgroundImages;
