import axios from "axios";
import React, { Component } from "react";
import {Card, ListGroup} from 'react-bootstrap';
import {Button}  from '@mui/material';
import CreateGoalModal from '../CreatGoalModal/CreateGoalModal';

class DisplayGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        goals: [],
    };
  }


  componentDidMount = () =>{
        console.log("ComDidMount :", this.props.user)
      this.getUserGoals();
  }

  getUserGoals = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/goals/${this.props.user.user_id}/`
      );
      this.setState({
        goals: response.data,
      });
      
    } catch (err) {
      console.log("Unable To Fetch Goal");
    }
  };

  postNewGoal = async (newGoal) => {
    const response = await axios.post(
      " http://127.0.0.1:8000/api/goals/",
      newGoal
    );
    this.getUserGoals();
    return response.status;
  };


  deleteGoal = async (goalId) =>{
      const response = await axios.delete(`http://127.0.0.1:8000/api/goals/details/${goalId}/`)
      this.getUserGoals();
      return response.status
  }

  render() {
    var goals = this.state.goals;
    return (
 
        <Card style={{ width: '30rem' }}>
        <Card.Header style={{color: "black"}}> GOAL TRACKER:</Card.Header>
        <ListGroup variant="flush">
        {goals.map(item =>
        goals.length > 0 ? 
        <ListGroup.Item>{item.custom_goal}    {console.log(item.id)}  <Button onClick={()=>this.deleteGoal(item.id)}>Delete</Button>   </ListGroup.Item>
        : <h1>This is where undefined stuff goes</h1>
        )}
        </ListGroup>
        <CreateGoalModal user={this.props.user} postNewGoal={this.postNewGoal} />
        </Card>

    );
  }
}

export default DisplayGoal;


