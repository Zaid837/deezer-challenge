import React from "react";
import "./userDashboard.styles.css";
import MusicCard from "../components/Music Card/music-card-component";

class UserDashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tracks: [],
      playlists: [],
      browse: [],
    };
  }

  getSongs = async () => {
    try {
      const res = await fetch(
        "https://cors.bridged.cc/https://api.deezer.com/chart"
      );
      const data = await res.json();
      this.setState({
        tracks: data.tracks.data,
        loading: false,
        playlists: data.playlists.data,
        browse: data.albums.data,
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount() {
    this.getSongs();
  }

  render() {
    const { loading, tracks, playlists, browse } = this.state;

    return loading ? (
      <p>loading</p>
    ) : (
      <div className="new-releases">
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

        <div className="title-intro">
          <h5 className="title">Browse</h5>
          <div className="line2 ml-4 mt-3"></div>
        </div>

        <div className="music-card">
          {browse.map((val) => {
            return (
              <div className="card-container">
                <div className="image">
                  <img
                    key={val.id}
                    src={val.cover}
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
  }
}

export default UserDashboardPage;
