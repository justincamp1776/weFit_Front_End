import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Routines from "./components/Routines/Routines";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from "./components/Authentication/Login";
import Home from "./components/Home/Home";
import Services from './components/Services/Services';
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
      this.setState({ user, isLoggedIn : true });
     
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

  callToAction = () =>{
    alert("555-555-5555")
  }

  userLogOut = async () => {
    localStorage.removeItem("token");
    this.setState({
      isLoggedIn : false
    })
  };

  render() {
    var isLoggedIn = this.state.isLoggedIn;
    var user = this.state.user;
    console.log("Is Logged In in Render :", isLoggedIn);
    console.log("User Variable in Render :", user);

    return (

    <div style={{backgroundColor: "black"}}>

       <NavBar user={this.state.user} userLogOut={this.userLogOut} isLoggedIn={this.state.isLoggedIn} callToAction={this.callToAction}/>
        <Router>
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => {
                  if (isLoggedIn == true) {
                    return <Redirect to="/home" user={user}/>;
                  } else {
                    return <Redirect to="/login" />;
                  }
                }}
              />
              <Route
                exact
                path="/home"
                render={(props) => {
                  if (isLoggedIn == true) {
                    return <Home
                    {...props}
                    user={user}
                  />;
                  } else {
                    return  <Login
                    {...props}
                    registerNewUser={this.registerNewUser}
                    userSignIn={this.userSignIn}
                  />;
                  }
                }}
              />
              <Route
                exact
                path="/login"
                render={(props) => {
                  if (isLoggedIn == true) {
                    return <Home
                    {...props}
                    user={user}
                  />;
                  } else {
                    return  <Login
                    {...props}
                    registerNewUser={this.registerNewUser}
                    userSignIn={this.userSignIn}
                  />;
                  }
                }}
              />
                <Route
                exact
                path="/routines"
                render={(props) => {
                  if (isLoggedIn == true) {
                    return <Routines {...props} user={user}
                  />;
                  } else {
                    return  <Login
                    {...props}
                    registerNewUser={this.registerNewUser}
                    userSignIn={this.userSignIn}
                  />;
                  }
                }}
              />
               <Route exact path="/services" render ={props => <Services {...props} />} />
            </Switch>
        </Router>
        </div>
    );
  }
}

export default App;
