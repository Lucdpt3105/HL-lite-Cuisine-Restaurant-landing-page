import { useState } from "react";
const VideoPlayer = ({ videoBg, extraClass, dataAnimation }) => {
  const [video, setVideo] = useState(false);
  return (
    <div
      className={`kf-video-item ${extraClass} ${video ? "active" : ""}`}
      data-animate={dataAnimation ? "active" : ""}
      style={{
        backgroundImage: `url(${videoBg})`,
        visibility: "visible",
      }}
    >
      {video && (
        <iframe
          className="js-video-iframe"
          data-src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
          src="https://www.youtube.com/embed/Gu6z6kIukgg?showinfo=0&rel=0&autoplay=1"
        />
      )}
      <div className="play" onClick={() => setVideo(true)}>
        <i className="fas fa-play" />
      </div>
    </div>
  );
};
export default VideoPlayer;
