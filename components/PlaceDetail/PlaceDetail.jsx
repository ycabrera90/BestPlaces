import Image from 'next/image';
import classes from './PlaceDetail.module.css';

function PlaceDetail({ image, title, address, description }) {
  return (
    <section className={classes.detail}>
      <Image
        alt={title}
        src={image}
        fill
        sizes="(max-width: 768px) 100vw,                
                (max-width: 1200px) 50vw,
                 33vw"
        style={{
          objectFit: "cover",
        }}
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default PlaceDetail;
