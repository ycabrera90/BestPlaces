import React from "react";

import Slide from "../../Slide/Slide";
import ListContainer from "../../PlacesList/ListContainer/ListContainer";
import PlaceItem from "../../PlacesList/PlaceItem/PlaceItem";
import classes from "./BackgroundImages.module.css";




const BackgroundImages = ({ images }) => {

  return (
    <div className={classes["background-container"]}>
      <Slide datas={images} speed={100} />
      <Slide datas={images} speed={50} />
      <Slide datas={images} speed={100} reverse />
    </div>
  );
};

export default BackgroundImages;
