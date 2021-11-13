import React from 'react';
import {Button, Grid} from '@mui/material';
// import header from './Images/header2.png';
import header from './Images/header.png';
import group from './Images/group2.png';
import trainer from './Images/trainer.png';
import virtual from './Images/virtual.png'

const Services = () => {


    const handleClick =(event) =>{
        event.preventDefault();
        alert("Call Us Now: 555-555-5555")
    }



    return (  
     
        <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12}>
                <img src={header} alt="Header" width="100%"/>
            </Grid>
            <Grid justifyContent="center" container spacing={10}>
            <Grid item xs={12} style={{marginTop: "50px", marginLeft: "700px", fontSize: 25, color: "white"}}>
            <h3> Personal Training and Group Classes: </h3>
            </Grid>

            <Grid justifyContent="center" container spacing={10}style ={{marginTop: "50px", marginRight: "80px"}}>
                <Grid item xs={3}/>
                <Grid style={{color: "white", marginTop: "50px", paddingRight: "1px"}} item xs={3}>
                    <h5> Personal Training:</h5>
                    <ul>
                        <li>2 Days Per Week: $640 per month ($80 per session)</li>
                        <li>3 Days Per Week: $900 per month($75 per session)</li>
                        <li>4 Days per Week : $1,120 ($70 per session)</li>
                        <Button color="danager" variant="filled" onClick={handleClick}>Call Now</Button>
                    </ul>
                </Grid>
                <Grid item xs={4} >
                <img src={trainer} alt="group training"style={{borderRadius:"50%"}} />
                </Grid>
                <Grid item xs={1}/>
               


            <Grid justifyContent="center" container spacing={10}style ={{marginTop: "50px", marginLeft: "180px"}}>
                <Grid item xs={3} />
                <Grid style={{color: "white", marginTop: "50px", paddingLeft: "30px"}} item xs={3}>
                    <h5> Fitness Classes:</h5>
                    <ul>
                        <li>2 Days Per Week: $165 per month</li>
                        <li>3 Days Per Week: $205 per month</li>
                        <li>Unlmimted: $225 per month</li>
                        <Button color="danager" variant="filled" onClick={handleClick}>Call Now</Button>
                    </ul>
                </Grid>
                <Grid item xs={6}>
                <img src={group} alt="group training"style={{borderRadius:"50%"}} />
                </Grid>
              

                <div style={{color: "white"}}>
                    <hr/>
                </div>


               
               


                <Grid justifyContent="center" container spacing={10}style ={{marginTop: "50px", marginBottom: "100px", marginRight: "38px"}}>
                    {/* <Grid item xs={1}/> */}
                <Grid item xs={3} />
                <Grid style={{color: "white", marginTop: "150px", paddingLeft: "15px" }} item xs={3}>
                    <h5> Virtual Training:</h5>
                    <ul>
                        <li>2 Days Per Week: $165 per month</li>
                        <li>3 Days Per Week: $205 per month</li>
                        <Button color="danager" variant="filled" onClick={handleClick}>Call Now</Button>
                    </ul>
                </Grid>
                <Grid item xs={3}>
                <img src={virtual} alt="group training"style={{borderRadius:"50%"}} />
                </Grid>
                <Grid item xs={2}/>
               
                </Grid>
                </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Services;