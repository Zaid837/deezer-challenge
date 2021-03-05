import React from "react";
import UserDashboard from "../../layout/userDashboard";
import "./browse.styles.css";

class Browse extends React.Component {
  constructor() {
    super();

    this.state = {
      browseCards: [],
      loading: true,
    };
  }

  getBrowseCards = async () => {
    try {
      const res = await fetch(
        `https://cors.bridged.cc/https://api.deezer.com/album/${this.props.match.params.id}`
      );
      const data = await res.json();
      console.log(data.tracks.data);
      this.setState({
        browseCards: data,
        loading: false,
      });
    } catch (e) {
      console.log(e);
    }
  };

  componentDidMount = () => {
    this.getBrowseCards();
  };

  render() {
    const { loading, browseCards } = this.state;
    return (
      <UserDashboard>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className="new-releases">
            <div>
              <div className="title-intro">
                <h5 className="title">{this.state.browseCards.title}</h5>
                <div className="line2 ml-4 mt-3"></div>
              </div>
              <div className="music-card">
                {browseCards.tracks.data.map((val, key) => {
                  return (
                    <div className="card-container" key={key}>
                      <div className="image">
                        <img
                          key={val.id}
                          src={this.state.browseCards.cover}
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
            {/* <PlayerComponent tracks={player} index={0} /> */}
          </div>
        )}
      </UserDashboard>
    );
  }
}

export default Browse;
