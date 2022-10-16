/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faMagnifyingGlass, faMicrophone, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const videos = document.querySelector(".videos");
    const tagBar = document.querySelector(".tagbar");

    sidebar.classList.toggle("hide");
    videos.classList.toggle("move");
    tagBar.classList.toggle("move");

    if(videos.classList.contains("move")){
      videos.style.transition = "all .4s ease";
    }
  };
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar}><FontAwesomeIcon icon={faBars} /></button>
      <img src={Logo} />
      <form id="search-form">
        <input type="text" id="search" name="search" placeholder="Search" />
        <button type="submit" ><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        <button id="mic-button"><FontAwesomeIcon icon={faMicrophone} /></button>
      </form>
      <div id="action-buttons">
        <button id="create-button"><FontAwesomeIcon icon={faVideo} /></button>
        <button id="notifications-button"><FontAwesomeIcon icon={faBell} /></button>
        <button id="profile-button"><FontAwesomeIcon icon={faUser} /></button>
      </div>
    </nav>
  );
};

export default Navbar;
