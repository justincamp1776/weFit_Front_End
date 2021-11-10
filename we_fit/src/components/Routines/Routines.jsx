import React from "react";
import {Grid} from '@mui/material';
import WorkoutType from "../WorkoutType/WorkoutType";
import DisplayRoutine from "../DisplayRoutine/DisplayRoutine";
import DisplayGoal from "../DisplayGoal/DisplayGoal";


const Routines = (props) => {
  return (
    <div>
      <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} >  
                       <Grid item xs ={6}>
                       <DisplayRoutine />
                        </Grid>
                       <Grid item xs ={6}>
                       <WorkoutType />
                        </Grid>
                    </Grid>
                 </Grid>
        </Grid>  

    </div>
  );
};

export default Routines;
