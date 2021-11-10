import React, { Component } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Primary from "./Primary";
// import PrimaryModal from "./PrimaryModal"
// import CreateRoutine from "./createRoutine"


class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      primary_lifts: [],
    };
  }

  componentDidMount = () => {
    this.getAllExercises();
   
  };

  getAllExercises = async () => {
    const response = await axios.get(`http://127.0.0.1:8000/api/exercises/`);
    this.setState({
      exercises: response.data,
    });
    this.getPrimaryLifts();
    console.log("getAllExercises :", this.state.exercises);
  };
  
  getPrimaryLifts = () => {
    var primeLifts = [];
    let item = this.state.exercises.map(function (lift) {
      if (lift.priority.toLowerCase() == "1a".toLowerCase()) {
        primeLifts.push(lift);
      }
    });
    this.setState({
      primary_lifts: primeLifts
    });
    console.log("get Primary Lifts :", this.state.primary_lifts);
  };

 

  render() {
    return (
      <div>
        
        {/* <Primary primary_lifts={this.state.primary_lifts}/> */}
        {/* <CreateRoutine primary_lifts={this.state.primary_lifts}/> */}
      </div>
    );
  } 
}

export default Exercises;
