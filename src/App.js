import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserDashboard from "./layout/userDashboard";
import UserDashboardPage from "./pages/userDashboardPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/">
              <UserDashboard>
                <UserDashboardPage />
              </UserDashboard>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
