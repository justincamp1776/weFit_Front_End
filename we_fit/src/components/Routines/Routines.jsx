import React from "react";
import {Grid} from '@mui/material';
import WorkoutType from "../WorkoutType/WorkoutType";
import DisplayRoutine from "../DisplayRoutine/DisplayRoutine";
import './Routines.css';
import header from './Images/header.png'
import header2 from './Images/header2.png'



const Routines = (props) => {
  return (
 
      <Grid justifyContent="center" container spacing={10}>

        <Grid style={{marginBottom: "50px"}}item xs ={12}>
          <img src={header2} alt="Header" width="100%"/>
        </Grid>
        <Grid  container spacing={10}>
          <Grid item xs={2} item md={4}/>
          <Grid style={{marginBottom: "50px", marginRight: "60px"}} item xs ={8} item md={4}>
              <WorkoutType />
            </Grid>
            <Grid />


            <Grid  container spacing={10} >  
            <Grid item xs={2} item md={4}/>
                <Grid style={{marginBottom: "50px", marginLeft: "50px"}} item xs={2} item md={4} item xs ={8} item md={4}>
                      <DisplayRoutine />
                </Grid>
            <Grid item xs={2} item md={4}/>   
          </Grid>
         </Grid>
         </Grid>
     
       
  
   
  );
};

export default Routines;
