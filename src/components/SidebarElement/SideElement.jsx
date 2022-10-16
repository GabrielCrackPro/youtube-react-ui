/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SideElement.css";

const SideElement = ({ icon, text, active }) => {
  return (
    <div className={active ? "side-element selected": "side-element"}>
      <FontAwesomeIcon icon={icon} id="icon" />
      <p className="element-text">{text}</p>
    </div>
  );
};

SideElement.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default SideElement;
