import React from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal';

const Home = (props) => {
    return (  

        <div style={{color: "whitesmoke"}}>
            <h1>This is the Home Page</h1>
            {console.log("Home Page User Object :", props.user)}
            <DisplayGoal user={props.user}/>
        </div>
        
    );
}
 
export default Home;