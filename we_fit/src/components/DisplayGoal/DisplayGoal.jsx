import axios from "axios";
import React, { Component } from "react";
import CreateGoal from "../CreateGoal/CreateGoal";

class DisplayGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user : this.props.user,
        goal: {},
    };
  }


  componentDidMount = () =>{
        console.log("ComDidMount :", this.state.user)
      this.getUserGoal();
  }

  getUserGoal = async () => {
    try {
      console.log("getUserGoal UserId :", this.state.user.user_id);
      const response = await axios.get(
        `http://127.0.0.1:8000/api/goals/${this.state.user.user_id}/`
      );
      this.setState({
        goal: response.data,
      });
      console.log("getUserGoal GOAL :", this.state.goal);
    } catch (err) {
      console.log("Unable To Fetch Goal");
    }
  };

  postNewGoal = async (newGoal) => {
    const response = await axios.post(
      " http://127.0.0.1:8000/api/goals/",
      newGoal
    );
    this.getUserGoal();
    return response.status;
  };

  render() {
    var goal = this.state.goal;
    return (
      <div style={{color: "whitesmoke"}}>
      goal.map(item => 
            <ul>
            <li> I want to: {item.selected_goal} </li>
            <li> Performance : {item.custom_goal} </li>
        </ul> )
        {/* : <ul> This should show with no Goals in the database</ul>
        } */}
        ;
        <CreateGoal user={this.props.user} postNewGoal={this.postNewGoal} />
      </div>
    );
  }
}

export default DisplayGoal;
