import Image from 'next/image';

import classes from "./Slide.module.css";



const Slide = ({ datas, speed, reverse = false }) => {
  const animationConstructor = `${speed}s linear 1s infinite ${reverse ?'alternate-reverse': 'alternate'} ${classes.slide}`

  return (
    <section className={classes["items-container"]}>
      <ul style={{ animation: animationConstructor }}>
        {datas.map(({ id, image, title }) => (
          <li key={id}>
            <Image
              alt={title}
              src={image}
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