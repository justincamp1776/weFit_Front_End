import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class WorkoutType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 1,
      type: {
        name: "Fat Burning",
        sets: "3 to 4 Rounds",
        aReps: "30 seconds each exercise",
        bReps: "30 seconds each exercise",
        rest: "30 seconds",
        weight: "Light (65%-75% of 1 Rep Max)",
      },
    };
  }

  handleChange = (event) => {
    this.setState({
      select: event.target.value,
    });
    console.log("handleChange :", this.state.select)
  };

  handleSelect = (event) => {
    event.preventDefault();
    if (this.state.select === "1") {
      this.setState({
        type: {
          name: "Fat Burning",
          sets: "3 to 4 Rounds",
          aReps: "30 seconds each exercise",
          bReps: "30 seconds each exercise",
          rest: "30 seconds",
          weight: "Light (65%-75% of 1 Rep Max)",
        },
      });
    } else if (this.state.select === "2") {
      this.setState({
        type: {
          name: "Increase Muscle Size",
          sets: "3 to 4 Rounds",
          aReps: "8 reps of each exercise",
          bReps: "12 reps of each exercise",
          rest: "90 seconds",
          weight: "Medium/ Heavy (75%-85% of 1 Rep Max)",
        },
      });
    } else if(this.state.select === "3"){
      this.setState({
        type: {
          name: "Increase Maximum Strength",
          sets: "4 to 5 Rounds",
          aReps: "5 reps of each exercise",
          bReps: "10 reps of each exercise",
          rest: "2-3 minutes",
          weight: "Heavy (85%-95% of 1 Rep Max)",
        },
      });
    }
  };

  render() {
    var type = this.state.type;

    return (
      <div>
        <Card style={{ width: "30rem" }}>
          <div>
            <select
              className="browser-default custom-select"
              onChange={this.handleChange} onClick={this.handleSelect}
            >
              <option>I want to :</option>
              <option value="1">Burn Fat and Lose Weight</option>
              <option value="2">Increase Muscle Size</option>
              <option value="3">Increase Maximum Strength</option>
            </select>
          </div>
         
          <Card.Header style={{ color: "black" }}> {type.name}: </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Perform 1a then 1b and repeat until rounds are complete. Then move to 2a and 2b...
            </ListGroup.Item>
            <ListGroup.Item>REPS : </ListGroup.Item>
            <ListGroup.Item> All A Groups = {type.aReps}</ListGroup.Item>
            <ListGroup.Item> All B Groups = {type.bReps}</ListGroup.Item>
            <ListGroup.Item>
              {" "}
              REST : {type.rest} between each round.{" "}
            </ListGroup.Item>
            <ListGroup.Item> Repeat for {type.sets}</ListGroup.Item>
            <ListGroup.Item> Weight: {type.weight}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default WorkoutType;
