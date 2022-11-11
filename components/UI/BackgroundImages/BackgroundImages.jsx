import React from "react";
import useDOM_helper from "../../../hooks/useDOM_helper";

import Slide from "../../Slide/Slide";
import classes from "./BackgroundImages.module.css";

const BackgroundImages = ({ images }) => {
  const { screen } = useDOM_helper();
  console.log(screen);

  return (
    <div className={classes["background-container"]}>
      <Slide datas={images} speed={150} />
      <Slide datas={images} speed={100} />
      {screen.orientation === "portrait" && (
        <Slide datas={images} speed={100} reverse />
      )}
      <Slide datas={images} speed={150} reverse />
    </div>
  );
};

export default BackgroundImages;
