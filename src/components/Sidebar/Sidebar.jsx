/* eslint-disable no-unused-vars */
import React from "react";
import { faBookOpen, faBroadcastTower, faChildReaching, faClapperboard, faClock, faClockRotateLeft, faCompass, faDollarSign, faExclamation, faFlag, faGamepad, faGear, faHouse, faLightbulb, faMusic, faScrewdriverWrench, faStopwatch20, faThumbsUp, faTrophy, faTv, faUser, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import SideElement from "../SidebarElement/SideElement";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SideElement icon={faHouse} text="Home" active />
      <SideElement icon={faCompass} text="Explore" />
      <SideElement icon={faStopwatch20} text="Shorts" />
      <SideElement icon={faUsers} text="Subscriptions" />
      <hr />
      <SideElement icon={faBookOpen} text="Library" />
      <SideElement icon={faClockRotateLeft} text="History" />
      <SideElement icon={faVideo} text="Videos" />
      <SideElement icon={faClock} text="Watch Later" />
      <SideElement icon={faThumbsUp} text="Liked Videos" />
      <hr />
      <h4 className="sidebar-text">Subscriptions</h4>
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <SideElement icon={faUser} text="Channel" />
      <hr />
      <h4 className="sidebar-text">Explore</h4>
      <SideElement icon={faClapperboard} text="Movies" />
      <SideElement icon={faGamepad} text="Videogames" />
      <SideElement icon={faBroadcastTower} text="Live" />
      <SideElement icon={faLightbulb} text="Learning" />
      <SideElement icon={faTrophy} text="Sports" />
      <h4 className="sidebar-text">More of Youtube</h4>
      <SideElement icon={faDollarSign} text="Youtube Premium" />
      <SideElement icon={faScrewdriverWrench} text="Creator Studio" />
      <SideElement icon={faMusic} text="Youtube Music" />
      <SideElement icon={faChildReaching} text="Youtube Kids" />
      <SideElement icon={faTv} text="Youtube TV" />
      <hr />
      <SideElement icon={faGear} text="Settings" />
      <SideElement icon={faFlag} text="Complaint History" />
      <SideElement icon={faExclamation} text="Send Suggestions" />
    </div>
  );
};

export default Sidebar;
