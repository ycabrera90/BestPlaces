import React from 'react'
import classes from "./Slide.module.css";

const Slide = ({ datas, speed, reverse = false }) => {
    const animationConstructor = `${speed}s linear 1s infinite ${reverse ?'alternate-reverse': 'alternate'} ${classes.slide}`
  return (
    <section className={classes["items-container"]}>
      <ul style={{ animation: animationConstructor }}>
        {datas.map((data) => (
          <li key={data.id}>
            <img key={data.id} src={data.image} alt={data.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Slide;