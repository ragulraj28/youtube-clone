import React from "react";
import "./video.scss";

const Video = ({ video, layout = "row" }) => {
  const {
    thumbnail,
    title,
    duration,
    logo,
    channel,
    views,
    uploadTime,
  } = video;

  return (
    <div className={`video-card ${layout}`}>
      <div className="head">
        <img src={thumbnail} alt={title} />
        <span className="duration">{duration}</span>
      </div>
      <div className="footer">
        {layout === "row" && <img src={logo} alt={channel} className="logo" />}
        <div className="video-info">
          <h3 className="title">{title}</h3>
          <p className="channel-name">{channel}</p>
          <p>
            {views} views <span className="dot" />
            {uploadTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
