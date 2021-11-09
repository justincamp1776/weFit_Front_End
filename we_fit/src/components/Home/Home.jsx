import React from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal';
import WorkoutTypeSelector from "../WorkoutTypeSelector/WorkoutTypeSelector";
import Exercises from '../Excercises/Exercises' ;

const Home = (props) => {
    return (  

        <div style={{color: "whitesmoke"}}>
            <h1>This is the Home Page</h1>
            <WorkoutTypeSelector />
            {console.log("Home Page User Object :", props.user)}
            <DisplayGoal user={props.user}/>
            <Exercises />
        </div>
        
    );
}
 
export default Home;