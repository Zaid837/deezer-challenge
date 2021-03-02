import React from "react";
import HeroBox from "../components/hero/herobox.component";
import Sidebar from "../components/sidebar/sidebar.component";
import PlayerComponent from "../components/player/player.components";

class UserDashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Sidebar />
        <div className="content-area">
          <HeroBox />
          {this.props.children}
          <PlayerComponent />
        </div>
      </div>
    );
  }
}

export default UserDashboard;
