import React from "react";
import classes from "./ToggleButton.module.css";
import { useState } from "react";

const ToggleButton = ({ onClick, expanded }) => {
  let toggleButtonClasses = `${classes["toggle-button"]}  ${
    expanded ? classes["expanded"] : ""
  }`;

  return (
    <button className={toggleButtonClasses} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleButton;
