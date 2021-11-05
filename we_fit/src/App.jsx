import React, { Component } from "react";
import "./App.css";
import image from "./images/gym.png";
import { Switch, Routes, Route } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  // Registration Modal or Over Lay landing Page
  // Sign in Modal if Registraion OverLay Landing

  render() {
    return (
      <div className="background" style={{ backgroundImage: `url(${image})` }}>
        {/* Nav Bar */}

          <Switch>
            <Route/>
            {/* <Route path='/welcome' element={<Home/>} /> */}
          </Switch>
      </div>
    );
  }
}

export default App;
