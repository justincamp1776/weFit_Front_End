import React from "react";
import {Grid} from '@mui/material';
import WorkoutType from "../WorkoutType/WorkoutType";
import DisplayRoutine from "../DisplayRoutine/DisplayRoutine";
import './Routines.css';
// import header2 from './Images/header2.png'
import header from './Images/header.png';
import gym from './Images/equipment.png';
import gym2 from './Images/gym2.png';




const Routines = (props) => {
  return (
 
      <Grid justifyContent="center" container spacing={10}>
        <Grid style={{marginBottom: "50px"}}item xs ={12}>
          <img src={header} alt="Header" width="100%"/>
        </Grid>
        <Grid container spacing={10} style={{ justifyContent: "center", marginLeft: "200px",
         marginTop: "50px"}}>
          <Grid item xs ={6} item md={4} style={{marginRight: "30px"}}>
              <WorkoutType />
            </Grid>
            <Grid item xs={6} item md={4}>
            <img src={gym2} alt= "picture of a gym" width="440px"style={{borderRadius:"8px", marginTop: "15px"}} />
            </Grid>
            <Grid  container spacing={10} style={{ justifyContent: "center", marginTop: "50px",
             marginLeft: "15px", marginBottom: "100px"}} >  
                <Grid  item xs ={6} item md={4}style={{marginRight: "50px"}} >
                      <DisplayRoutine />
                </Grid>
                <Grid item xs={6} item md={4}>
                <img src={gym} alt= "picture of a gym" width="360px" style={{borderRadius:"8px", 
                paddingRight: "20px", marginLeft: "55px", marginTop: "25px"}} />
            </Grid>
          </Grid>
         </Grid>
         </Grid>
  );
};

export default Routines;
