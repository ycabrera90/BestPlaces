import classes from "./ToggleButton.module.css";



const ToggleButton = ({ onClick, expanded }) => {

  return (
    <button 
      className={`${classes["toggle-button"]} ${expanded ? classes["expanded"] : ""}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
