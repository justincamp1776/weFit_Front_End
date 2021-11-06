import React, { Component } from "react";
import "./App.css";
import image from "./images/gym.png";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }

  // Registration Modal or Over Lay landing Page
  // Sign in Modal if Registraion OverLay Landing

  render() {
    var user = this.state.user;

    return (
      <div className="background" style={{ backgroundImage: `url(${image})` }}>
        {/* Nav Bar */}
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  return this.state.user ? (
                    <Redirect to="/home" />
                  ) : (
                    <Redirect to="/login" />
                  );
                }}
              />

              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/home"
                render={(props) => <Home {...props} />}
              />
              {/* <Route path='/welcome' element={<Home/>} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
