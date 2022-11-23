import { FC } from "react";

// import Places from "@/types/Places";
import { Places } from "@/models/Places.type";
import useDOM from "@/hooks/useDOM";
import ImagesSlide from "../../others/ImagesSlide/ImagesSlide";
import styles from "./ImageMotion.module.css";

export interface IImageMotion {
  images: Places[];
}

const ImageMotion: FC<IImageMotion> = ({ images }) => {
  const { screen } = useDOM();

  return (
    <div className={styles["background-container"]}>
      <ImagesSlide datas={images} speed={150} />
      <ImagesSlide datas={images} speed={100} />
      {screen.orientation === "portrait" && (
        <ImagesSlide datas={images} speed={100} reverse />
      )}
      <ImagesSlide datas={images} speed={150} reverse />
    </div>
  );
};

export default ImageMotion;
