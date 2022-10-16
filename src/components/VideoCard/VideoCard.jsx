/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import "./VideoCard.css";

const VideoCard = ({ thumbnail, title, channel, channelAvatar, views, date }) => {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} id="thumbnail" />
      <div className="video-title">
        <img src={channelAvatar} alt={channel} id="channel-avatar" />
        <h4>{title}</h4>
      </div>
      <div className="video-info">
        <small id="channel">{channel}</small>
        <h6 id="date">{views ? `${views} views` : ""} {date ? ` - ${date}` : ""}</h6>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  channelAvatar: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired
};

export default VideoCard;
