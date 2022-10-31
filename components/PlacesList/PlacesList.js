import PlaceItem from './PlaceItem/PlaceItem';
import classes from './PlacesList.module.css';

function PlacesList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <PlaceItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default PlacesList;
