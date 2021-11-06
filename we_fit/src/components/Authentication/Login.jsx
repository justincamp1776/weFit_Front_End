import React from "react";
import "./LoginForm.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import image from "../Authentication/images/weFit2.png";
import {Grid} from '@mui/material';

const Login = (props) => {
  return (
 
        <Grid justifyContent="center" style={{marginTop: "280px"}}container spacing={1}>
          <Grid itemxs={12}>
             <img src={image} alt="personal trainer"></img>
         </Grid>
          <Grid justifyContent="center"container spacing={1}>
          <Grid itemxs={6} style={{marginLeft: "20px"}}   >
          <LoginForm />  
          </Grid>
          <Grid itemxs={6} style={{marginLeft: "80px"}} >
          <RegistrationForm  />
          </Grid>
          </Grid>
     
      </Grid>
      
      


  );
};

export default Login;
