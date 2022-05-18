import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";
import "./Intro.scss";
import { useState } from "react";
import { useScrollY } from "../hooks";

function Intro() {
  const [isMuted, setIsMuted] = useState(false);
  const scrollY = useScrollY();

  return (
    <div className="introContainer">
      <ReactPlayer
        className="introVideo"
        playing={scrollY < 250 ? true : false}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted}
        url="https://vimeo.com/273686020"
        // url="https://vimeo.com/644494272"
        // url="https://vimeo.com/316941203"
      />
      <div className="introInfo">
        <h1 className="introHeading">Wellcome</h1>
        <p className="introOverview">
          Watch your TV shows and movies — where you want.
          <br />
          Unlimited movies TV shows and more
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
