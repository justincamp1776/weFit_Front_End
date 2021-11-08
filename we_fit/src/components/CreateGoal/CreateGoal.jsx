import React, { Component } from 'react';
import Box from '@mui/material/Box';
import {Form, Button}  from 'react-bootstrap';


class CreateGoal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            selected_goal : 'Burn Fat and Lose Weight',
            custom_goal : 'I want to workout 3 times per week for 4 weeks.',
         }
    }


    handleSelect =(event)=>{
        this.setState({
            selected_goal : event.target.value
        })
        console.log("handleSelect :", this.state.selected_goal)
    }

    handleFormChange = (event) =>{
        this.setState({
            custom_goal : event.target.value
        })
        console.log("handleFormChange :", this.state.custom_goal)
    }

    handleSubmit =(event)=>{
        event.preventDefault();
        var newGoal ={
            user : this.props.user.user_id,
            selected_goal : this.state.selected_goal,
            custom_goal : this.state.custom_goal
        }
        console.log("handleSubmit :", newGoal)
        this.props.postNewGoal(newGoal);
    }

    render() { 
        return (  
            <Box justifyContent="center"  >
                <select onChange={this.handleSelect}className="browser-default custom-select">
                    <option>I want to :</option>
                    <option value="Burn Fat and Lose Weight">Burn Fat and Lose Weight</option>
                    <option value="Increase Maximum Strength">Increase Maximum Strength</option>
                    <option value="Increase Muscle Size">Increase Muscle Size</option>
                </select>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" onChange={this.handleFormChange} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write Your Fitness Goal Here</Form.Label>
                        <Form.Control placeholder=" Write a performance goal that will help you stay the course!" as="textarea" rows={3} />
                    </Form.Group>
                    <Button onClick={this.handleSubmit}> Submit Goal </Button>
                </Form >
            </Box>
        );
    }
}
 
export default CreateGoal;   


