import classes from "./PlaceItem.module.css";

function PlaceItem({ id, image, title }) {
  return (
    <img className={classes.img} src={image} alt={title} />
  );
}

export default PlaceItem;
