import React from "react";
import HeroBox from "../components/hero/herobox.component";
import Sidebar from "../components/sidebar/sidebar.component";
import PlayerComponent from "../components/player/player.components";
import "./userDashboard.styles.css";

class UserDashboard extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ width: "85%", marginLeft: "15%" }}>
          <HeroBox />
          <div className="content-area">{this.props.children}</div>
          <PlayerComponent />
        </div>
      </div>
    );
  }
}

export default UserDashboard;
