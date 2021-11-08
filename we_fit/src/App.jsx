import React, { Component } from "react";
import "./App.css";
import image from "./images/gym.png";
import { Button } from "@mui/material";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
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
    console.log("Component Did Mount JWT :", tokenFromStorage);
    try {
      const user = jwt_decode(tokenFromStorage);
      this.setState({ user, isLoggedIn: true });
   
    } catch {
      console.log(
        "componentDidMount jumped to catch :",
        this.state.user,
        this.state.loggedIn
      );
    }
  }

  registerNewUser = async (newUser) => {
    console.log("registerNewUser Function :", newUser);
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
    console.log("userSignIn Function :", userCreds);
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
            <Button onClick={this.userLogOut}> LOG OUT </Button>
            <hr />

            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  if ((isLoggedIn = true)) {
                    return <Redirect to="/home" />;
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
                render={(props) => <Home {...props} user={user} />}
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
