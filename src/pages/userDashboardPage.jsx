import React from "react";
import "./userDashboard.styles.css";
import NewReleases from "../components/new-releases/new-releases.component";
import FeaturedPlaylists from "../components/featured-playlists/featured-playlists.component";
import Browse from "../components/browse/browse.component";

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
        <NewReleases tracks={tracks} />
        <FeaturedPlaylists playlists={playlists} />
        <Browse browse={browse} />
      </div>
    );
  }
}

export default UserDashboardPage;
