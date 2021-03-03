import React from "react";
import "./new-releases.styles.css";

const NewReleases = ({ tracks }) => {
  return (
    <div>
      <div className="title-intro">
        <h5 className="title">Released this week</h5>
        <div className="line2 ml-4 mt-3"></div>
      </div>

      <div className="music-card">
        {tracks.map((val) => {
          return (
            <div className="card-container">
              <div className="image">
                <img
                  key={val.id}
                  src={val.album.cover}
                  alt="music-cover"
                  className="music-cover"
                />
              </div>
              <p className="name" key={val.id}>
                {val.title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewReleases;
