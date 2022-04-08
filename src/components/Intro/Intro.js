import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import "./Intro.scss";
import { useState } from "react";

function Intro() {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="introContainer">
      <ReactPlayer
        className="introVideo"
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/644494272"
      />
      <div className="introInfo">
        <h1 className="introHeading">Netflix</h1>
        <p className="introOverview">
          Netflix movie new comedic animation movie new comedic animation movie
          new comedic animation movie new comedic animation
        </p>
      </div>
      {isMuted ? (
        <VscMute
          className="btnVolume"
          onClick={() => {
            setIsMuted((prev) => !prev);
          }}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => {
            setIsMuted((prev) => !prev);
          }}
        />
      )}

      <div className="introFade"></div>
    </div>
  );
}

export default Intro;
