import { FC } from "react";
import useDOM from "../../../hooks/useDOM";
import { Places } from "../../../types";
import ImagesSlide from "../../others/ImagesSlide/ImagesSlide";
import classes from "./BackgroundImages.module.css";

type BackgroundImagesProps = {
  images: Places[];
};

const BackgroundImages: FC<BackgroundImagesProps> = ({ images }) => {
  const { screen } = useDOM();

  return (
    <div className={classes["background-container"]}>
      <ImagesSlide datas={images} speed={150} />
      <ImagesSlide datas={images} speed={100} />
      {screen.orientation === "portrait" && (
        <ImagesSlide datas={images} speed={100} reverse />
      )}
      <ImagesSlide datas={images} speed={150} reverse />
    </div>
  );
};

export default BackgroundImages;
