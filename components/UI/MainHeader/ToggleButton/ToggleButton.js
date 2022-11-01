import React from "react";
import classes from "./ToggleButton.module.css";
import { useState } from "react";

const ToggleButton = (props) => {
  const [expandedClass, setExpandedClass] = useState(false);

  const toggleButtonHandler = () => {
    props.onClick();
    setExpandedClass((prevState) => !prevState);
  };

  let toggleButtonClasses = `${classes["toggle-button"]}  ${
    expandedClass ? classes["expanded"] : ""
  }`;

  return (
    <button
      className={`${props.className} ${toggleButtonClasses}`}
      onClick={toggleButtonHandler}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
