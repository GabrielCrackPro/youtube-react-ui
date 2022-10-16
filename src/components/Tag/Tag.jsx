/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./Tag.css";

const Tag = ({ text }) => {
  return (
    <div className="tag">
      <p>{text}</p>
    </div>
  );
};

Tag.propTypes = {
  text: PropTypes.string.isRequired
};

export default Tag;
