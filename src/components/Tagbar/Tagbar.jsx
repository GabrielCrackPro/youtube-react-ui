/* eslint-disable no-unused-vars */
import React from "react";
import Tag from "../Tag/Tag";
import "./Tagbar.css";

const TagBar = () => {
  return (
    <div className="tagbar">
      <Tag text="Programming"/>
      <Tag text="Linux"/>
      <Tag text="React"/>
      <Tag text="Terminal"/>
      <Tag text="Coding"/>
    </div>
  );
};

export default TagBar;
