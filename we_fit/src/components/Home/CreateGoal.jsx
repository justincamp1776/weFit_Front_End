import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Form, Button } from "react-bootstrap";

class CreateGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      custom_goal: " ",
    };
  }


  handleFormChange = (event) => {
    this.setState({
      custom_goal: event.target.value,
    });
    console.log("handleFormChange :", this.state.custom_goal);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    var newGoal = {
      user: this.props.user.user_id,
      custom_goal: this.state.custom_goal,
    };
    console.log("handleSubmit :", newGoal);
    this.props.postNewGoal(newGoal);
  };

  render() {
    return (
      <Box justifyContent="center">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group
            className="mb-3"
            onChange={this.handleFormChange}
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Write Your Fitness Goal Here</Form.Label>
            <Form.Control
              placeholder=" Write a performance goal that will help you stay the course!"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Button onClick={this.handleSubmit}> Submit Goal </Button>
        </Form>
      </Box>
    );
  }
}

export default CreateGoal;
