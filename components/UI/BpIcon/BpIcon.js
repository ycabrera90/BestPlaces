import classes from "./BpIcon.module.css";

const BpIcon = () => {
  return (
    <i className={classes["bp-icon"]}>
      <img src="/favicon.ico" alt='Best Place'/>
      <h1>PLACES</h1>
    </i>
  );
};

export default BpIcon;
