import React from "react";

const FeaturedPlaylists = ({ playlists }) => {
  return (
    <div>
      <div className="title-intro">
        <h5 className="title">featured playlists</h5>
        <div className="line2 ml-4 mt-3"></div>
      </div>

      <div className="music-card">
        {playlists.map((val) => {
          return (
            <div className="card-container">
              <div className="image">
                <img
                  key={val.id}
                  src={val.picture}
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

export default FeaturedPlaylists;