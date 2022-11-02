import classes from "./PlaceItem.module.css";

function PlaceItem({ id, image, title }) {
  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
    </li>
  );
}

export default PlaceItem;
