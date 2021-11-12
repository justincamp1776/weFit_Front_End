import React from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal'
import {Grid}  from '@mui/material';

import header2 from './Image/header2.png';
import trainer from './Image/personalTraining.png';



const Home = (props) => {

    return (  

        <Grid justifyContent="center" container spacing={10}>
                <Grid item xs ={12} styling={{marginBottom: "50px"}}>
                <img src={header2} alt="header" width="100%" />
                </Grid>
                    <Grid justifyContent="center" style={{marginRight: "120px", marginBottom: "200px"}} container spacing={10}> 
                    <Grid item xs={3} item md={5}/>
                       <Grid justifyContent="center" style={{marginTop: "50px"}}item xs ={4} item md={2}>
                        <DisplayGoal user={props.user}/>
                        </Grid>
                        <Grid item xs={5} item md={5} />
                        <hr/>
                        <Grid direction="row" justifyContent="center" container spacing={10} style={{marginTop: "50px"}}>
                            <Grid item xs={2}/>
                           <Grid item xs ={2} style={{color: "white", marginTop: "35px"}}>
                            <h4>Client Testimony:</h4>
                         <p><i> weFit has helped me achieve my goals and now I feel better than I have in years. Their Goal Tracker was so convenient that I started 
                            using it for everything. I never have to "do fitness" alone again!
                            - Marie Gomez - </i> (August 2021)
                        </p>
                         </Grid>
                        <Grid item xs ={6} >
                        <img src={trainer} alt="personal training" style={{borderRadius:"50%"}}/>
                     </Grid>
                </Grid>
            </Grid>
        </Grid>


        
    );
}
 
export default Home;