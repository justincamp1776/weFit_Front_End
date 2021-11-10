import React from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal'
import image from "./Image/code.png"



import {Grid}  from '@mui/material';

const Home = (props) => {

    // Select Drop Down For Display Routine (Day 1, Day 2, Day3)

    return (  

        <div style={{color: "whitesmoke"}}>
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} style={{marginTop: "100px", marginLeft: "400px"}} >  
                       <Grid item xs ={6}>
                           {console.log("Home User Prop :", props.user)}
                        <DisplayGoal user={props.user}/>
                        {/* <a href= "https://www.google.com/" target="_blank">  <img src={image} alt="cool picture"/> </a> */}
                        </Grid>
                    </Grid>
                 </Grid>
             </Grid>        
        </div>
        
    );
}
 
export default Home;