import React, {Component} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import axios from 'axios';
import SingleExercise from '../SingleExercise/SingleExercise';

class DisplayRoutine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            exercises : [],
            routine : "Day 1"
        }
    }

    componentDidMount = () =>{
        this.getFilteredExercises();
    }

    getFilteredExercises = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/exercises/`);
        this.setState({
          exercises: response.data,
        });
        this.handleFilterRoutine();
    };

    getAllExercises = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api/exercises/`);
        this.setState({
          exercises: response.data,
        });
        this.handleFilterRoutine();
    };

    handleFilterRoutine = async () =>{
        var routine = this.state.routine
        const newList = [];
        const lifts = this.state.exercises.map(function(item){
            if(item.collection.toLowerCase() == routine.toLowerCase()){
                newList.push(item);
            };
        });
        this.setState({
            exercises : newList
        });
    };

    handleChange = async (event) =>{
        this.setState({
            routine : event.target.value
        });
    };


    handleSubmit =async (event) =>{
        event.preventDefault();
        this.getAllExercises();
        this.handleFilterRoutine();
    };



    render() { 
        var exercises = this.state.exercises;
        return ( 
            <div>
                
                <Card style={{ width: '30rem' }}>
                <div>
                        <select value={this.state.routine} onChange={this.handleChange}
                            className="browser-default custom-select" onClick={this.handleSubmit}>
                            <option>Select Your Routine:</option>
                            <option value="Day 1">Day 1</option>
                            <option value="Day 2">Day 2</option>
                            <option value="Day 3">Day 3</option>
                        </select>
                </div>

                <Card.Header style={{backgroundColor: "black", color: "whitesmoke"}}>Workout of the Day:</Card.Header>
                    <ListGroup variant="flush">
                    {exercises.map(item =>
                    exercises.length > 0 ? 
                    <ListGroup.Item>{`${item.priority}` + "    " + `${item.name}`}  <SingleExercise exercise={item}/> </ListGroup.Item>
                    : <h1>No exercises are currently available</h1>
                    )}
                </ListGroup>
            </Card>
            </div>
        );
    }
}
 
export default DisplayRoutine;