import React from "react";
import Image from "next/image";
import classes from "./PlaceItem.module.css";

function PlaceItem({ image, title }) {
  return (
    <div className={classes["image-container"]}>
      <Image
        alt={title}
        src={image}
        fill
        sizes="25vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default React.memo(PlaceItem);
