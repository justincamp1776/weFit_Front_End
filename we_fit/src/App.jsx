import React, { Component } from "react";
import "./App.css";
import HomeScreen from "./images/HomeImage.png";
import NavBar from "./components/NavBar/NavBar";
import image from "./images/gym.png";
import newImage from "./images/refac.png";
import { Button, Grid } from "@mui/material";
import Routines from "./components/Routines/Routines";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
import jwt_decode from "jwt-decode";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    const tokenFromStorage = localStorage.getItem("token");
    try {
      const user = jwt_decode(tokenFromStorage);
      this.setState({ user, isLoggedIn: true });
    } catch {
      console.log("Check User Credentials :");
    }
  }

  registerNewUser = async (newUser) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        newUser
      );
      return response.status;
    } catch (err) {
      console.log("registerNewUser Function could not POST new user :", err);
    }
  };

  userSignIn = async (userCreds) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/login/",
        userCreds
      );
      localStorage.setItem("token", response.data.access);
      window.location = "/";
    } catch {
      alert("Username and/or Password Invalid. Please try again.");
    }
  };

  getPrimaryLifts = () => {
    var primeLifts = [];
    let item = this.state.exercises.map(function (lift) {
      if (lift.priority.toLowerCase() == "1a".toLowerCase()) {
        primeLifts.push(lift);
      }
    });
    this.setState({
      primary_lifts: primeLifts,
    });
    console.log("get Primary Lifts :", this.state.primary_lifts);
  };

  userLogOut = async () => {
    localStorage.removeItem("token");
    console.log("Token Has Been Removed From Storage");
  };

  render() {
    var isLoggedIn = this.state.isLoggedIn;
    var user = this.state.user;
    console.log("Is Logged In in Render :", isLoggedIn);
    console.log("User Variable in Render :", user);

    return (
      <div
        className="background"
        style={{ backgroundImage: `url(${HomeScreen})`, color: "whitesmoke" }}
      >
        <Grid>
       <NavBar user={user} userLogOut={this.userLogOut}/>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home" user={this.state.user} variant="filled">
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/create">Create Routine</Link>
              </li>
              <li>
                <Link to="/routines" user={this.state.user}>myRoutines</Link>
              </li>
            </ul>
            <Button onClick={this.userLogOut}> LOG OUT </Button>
            <hr />

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  if ((isLoggedIn = true)) {
                    return <Redirect to="/home" user={user}/>;
                  } else {
                    return <Redirect to="/login" />;
                  }
                }}
              />

              <Route
                exact
                path="/login"
                render={(props) => (
                  <Login
                    {...props}
                    registerNewUser={this.registerNewUser}
                    userSignIn={this.userSignIn}
                  />
                )}
              />
              <Route
                exact
                path="/home"
                render={(props) => (
                  <Home
                    {...props}
                    user={user}
                  />
                )}
              />
              <Route
                exact
                path="/routines"
                render={(props) => <Routines {...props} user={user} />}
              />
              <Route
                exact
                path="/create"
                render={(props) => (
                  <CreateRoutine
                    {...props}
                    user={user}
                    primary_lifts={this.state.primary_lifts}
                  />
                )}
              />
              {/* <Route path='/welcome' element={<Home/>} /> */}
            </Switch>
          </div>
        </Router>
        </Grid>
      </div>
    );
  }
}

export default App;
