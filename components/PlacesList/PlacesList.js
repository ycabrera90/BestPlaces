import PlaceItem from "./PlaceItem/PlaceItem";

import { ScrollMenu } from "react-horizontal-scrolling-menu";
import classes from "./PlacesList.module.css";

function PlacesList({ meetups }) {
  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY < 0) {
      apiObj.scrollNext();
      console.log("scrollNext");
    } else if (ev.deltaY > 0) {
      apiObj.scrollPrev();
      console.log("scrollPrev");
    }
  }

  return (
    <div className={classes["items-container"]}>
      <ul>
        <ScrollMenu onWheel={onWheel}>
          {meetups.map((meetup) => (
            <PlaceItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </ScrollMenu>
      </ul>
      <ul>
        <ScrollMenu onWheel={onWheel}>
          {meetups.map((meetup) => (
            <PlaceItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </ScrollMenu>
      </ul>
      <ul>
        <ScrollMenu onWheel={onWheel}>
          {meetups.map((meetup) => (
            <PlaceItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
            />
          ))}
        </ScrollMenu>
      </ul>
    </div>
  );
}

export default PlacesList;
