import { FC } from "react";
import useDOM_helper from "../../../hooks/useDOM_helper";

import Slide from "./Slide/Slide";

import classes from "./BackgroundImages.module.css";
import { Places } from "../../../types";

type BackgroundImagesProps = {
  images: Places[];
};



const BackgroundImages: FC<BackgroundImagesProps> = ({ images }) => {
  const { screen } = useDOM_helper();

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
