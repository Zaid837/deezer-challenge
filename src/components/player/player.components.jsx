import React from "react";
import "./player.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function PlayerComponent() {
  return (
    <div className="player">
      <div className="player-con">
        <div className="song-cover"></div>
        <div className="song-info">
          <p className="song-title ml-2">Nothing's playing</p>
          <div className="playback-controls ml-4">
            <span>
              <FontAwesomeIcon icon={faStepBackward} className="mr-1" />
            </span>
            <span>
              <FontAwesomeIcon icon={faPlayCircle} className="mr-1 play-btn" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStepForward} className="mr-1" />
            </span>
          </div>
          <div className="line ml-3 mr-4"></div>
          <span>
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
          </span>
          <span>
            <FontAwesomeIcon icon={faRandom} className="mr-2" />
          </span>
          <span>
            <FontAwesomeIcon icon={faRedo} className="mr-2" />
          </span>
          <span>
            <FontAwesomeIcon icon={faVolumeUp} className="mr-2" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlayerComponent;
