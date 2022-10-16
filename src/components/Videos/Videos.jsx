/* eslint-disable no-unused-vars */
import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import VideoData from "../../data/videos.json";
import "./Videos.css";

const Videos = () => {
  return (
    <div className="videos">
      {
        VideoData.map((video) => {
          return <VideoCard title={video.title} thumbnail={video.thumbnail} channel={video.channel} channelAvatar={video.channelAvatar} date={video.date} views={video.views} />;
        })
      }
    </div>
  );
};

export default Videos;
