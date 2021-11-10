import React from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal'



import {Grid}  from '@mui/material';

const Home = (props) => {

    // Select Drop Down For Display Routine (Day 1, Day 2, Day3)

    return (  

        <div style={{color: "whitesmoke"}}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} style={{marginBottom: "100px"}}>  
                       <Grid item xs ={6}>
                        <DisplayGoal user={props.user}/>
                    </Grid>
                    </Grid>
                    </Grid>
                </Grid>        
        </div>
        
    );
}
 
export default Home;