import Card from "../../UI/Card/Card";
import { useRouter } from "next/router";

import classes from "./PlaceItem.module.css";

function PlaceItem({ id, image, title }) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + id);
  }

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
    </li>
  );
}

export default PlaceItem;
