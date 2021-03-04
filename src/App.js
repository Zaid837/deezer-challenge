import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDashboard from "./layout/userDashboard";
import Playlists from "./pages/playlists/playlists";
import UserDashboardPage from "./pages/userDashboardPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <UserDashboard>
                <UserDashboardPage />
              </UserDashboard>
            </Route>
            <Route path="/:id" component={Playlists} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
