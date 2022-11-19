import { FC } from 'react';
import Image from 'next/image';

import { Places } from '../../../../models';
import classes from "./Slide.module.css";



const Slide: FC<{ datas: Places[]; speed: number; reverse?: boolean }> = (
  props
) => {
  const animationConstructor = `${props.speed}s linear 1s infinite ${
    props.reverse ? "alternate-reverse" : "alternate"
  } ${classes.slide}`;

  return (
    <section className={classes["items-container"]}>
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



export default Slide;