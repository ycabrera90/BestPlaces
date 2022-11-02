import PlaceItem from "./PlaceItem/PlaceItem";
import classes from "./PlacesList.module.css";

function PlacesList({ meetups }) {
  return (
    <div className={classes["items-container"]}>
      <ul>
        {meetups.map((meetup) => (
          <PlaceItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
      <ul>
        {meetups.map((meetup) => (
          <PlaceItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
      <ul>
        {meetups.map((meetup) => (
          <PlaceItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        ))}
      </ul>
    </div>
  );
}

export default PlacesList;
