import React, {useState} from "react";
import './Home.css';
import DisplayGoal from '../DisplayGoal/DisplayGoal'
import {Grid}  from '@mui/material';
// import header2 from './Image/header2.png';
import header from './Image/header.png';
import trainer from './Image/personalTraining.png';
import UserInformation from "../UserInformation/UserInformation";
import DisplayUserInfo from '../DisplayUserInfo/DisplayUserInfo';



const Home = (props) => {

    const[userInfo, setUserInfo]= useState();

    const setUserState =(userInfo)=>{
        setUserInfo(userInfo)
        console.log("setUserstate :", userInfo.first_name)
    }


    return (  

        <Grid justifyContent="center" container spacing={10} style={{marginBottom: "30px"}}>
                <Grid item xs ={12} styling={{marginBottom: "50px"}}>
                <img src={header} alt="header" width="100%" />
                </Grid>
                <Grid justifyContent="center" container spacing={10} >
             <Grid />
             <Grid justifyContent="center" container spacing={10} style={{marginTop: "50px", marginLeft: "100px"}}>
                 <Grid item xs={3}>
                   {userInfo ? <h1>Hello, {userInfo.first_name}</h1> : <h1>Hello</h1>}
                    <DisplayUserInfo userInfo={userInfo}/>
                 </Grid>
                 < Grid item xs={6} style={{color: "white"}}>
                     <h1>Performance Goals</h1>
                 </Grid>
                 <Grid item xs={3}/>
             </Grid>

                <Grid justifyContent="center" style={{marginRight: "120px", marginBottom: "200px", marginTop: "150px"}} container spacing={10}> 
                    <Grid item xs={4} item md={5}/>
                       <Grid justifyContent="center" style={{marginTop: "50px"}}item xs ={4} item md={2}>
                        <DisplayGoal user={props.user}/>
                       
                        </Grid>
                        <Grid item xs={4} item md={5} />
                        <hr/>
                        <Grid direction="row" justifyContent="center" container spacing={10} style={{marginTop: "50px", marginRight: "40px"}}>
                            <Grid item xs={2}/>
                           <Grid item xs ={2} style={{color: "white", marginTop: "100px"}}>
                            <h4>Client Testimony:</h4>
                         <p><i> weFit has helped me achieve my goals and now I feel better than I have in years. Their Goal Tracker was so convenient that I started 
                            using it for everything. I never have to "do fitness" alone again!
                            - Marie Gomez - </i> (August 2021)
                        </p>
                         </Grid>
                        <Grid item xs ={6} >
                        <img src={trainer} alt="personal training" style={{borderRadius:"8px"}}/>
                     </Grid>

                     <UserInformation user={props.user} setUserInfo={setUserState}/>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            
           
          



        
    );
}
 
export default Home;