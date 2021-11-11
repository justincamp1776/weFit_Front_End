import React from "react";
import {Grid} from '@mui/material';
import WorkoutType from "../WorkoutType/WorkoutType";
import DisplayRoutine from "../DisplayRoutine/DisplayRoutine";
import './Routines.css';
import background2 from '../Routines/Images/workoutBackground.png'
import DisplayGoal from "../DisplayGoal/DisplayGoal";


const Routines = (props) => {
  return (
 
      <Grid  container spacing={1}>
                <Grid item xs={12}>
                  <Grid style={{marginLeft: "750px", marginBottom: "240px", marginTop: '200px'}} item xs ={12}>
                    <WorkoutType />
                    </Grid>
                    <Grid container spacing={10} >  
                        <Grid  className="background" style={{ backgroundImage: `url(${background2})`}} container spacing={1} >  
                        <Grid item xs = {1}></Grid>
                        <Grid style={{marginLeft: "830px", paddingBottom: "300px"}}item xs ={10}>
                                <DisplayRoutine />
                        </Grid>
                        <Grid item xs = {1}></Grid>
                        </Grid>
                    </Grid>
                 </Grid>
            </Grid>  
  
   
  );
};

export default Routines;
