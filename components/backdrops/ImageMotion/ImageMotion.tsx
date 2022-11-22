import { FC } from "react";
import styles from "./ImageMotion.module.css";

export interface IImageMotion {
  sampleTextProp: string;
}

const ImageMotion: FC<IImageMotion> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default ImageMotion;
