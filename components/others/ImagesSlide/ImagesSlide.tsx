import { FC } from "react";
import Image from "next/image";
import { Places } from "@/models/Places.type";
import styles from "./ImagesSlide.module.css";

export interface IImagesSlide {
  datas: Places[];
  speed: number;
  reverse?: boolean;
}

const ImagesSlide: FC<IImagesSlide> = (props) => {
  const animationConstructor = `${props.speed}s linear 1s infinite ${
    props.reverse ? "alternate-reverse" : "alternate"
  } ${styles.slide}`;

  return (
    <section className={styles["items-container"]}>
      <ul style={{ animation: animationConstructor }}>
        {props.datas.map(({ id, image, title }) => (
          <li key={id}>
            <Image
              alt={title ? title : ""}
              src={image ? image : ""}
              fill
              sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                  20vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImagesSlide;
