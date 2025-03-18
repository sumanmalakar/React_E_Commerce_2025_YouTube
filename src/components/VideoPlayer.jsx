import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <div className="video-overlay"></div>
      <video
        className="video-player"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
