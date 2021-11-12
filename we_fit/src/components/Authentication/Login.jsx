import React from "react";
import "./LoginForm.css";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import background from './images/HomeImage.png';
import {Grid} from '@mui/material';

const Login = (props) => {
  return (
 
          <div
          className="background"
          style={{ backgroundImage: `url(${background})`, color: "whitesmoke" }}
        >
        <Grid justifyContent="center" container spacing={1}>
          <Grid justifyContent="center" style={{marginTop: "350px"}}container spacing={1}>
          <Grid itemxs={6} justifyContent="center"    >
            <LoginForm userSignIn={props.userSignIn}  />  
          </Grid>
          <Grid itemxs={6} justifyContent="center" >
              {console.log("Login Component Props :", props)}
              <RegistrationForm registerNewUser={props.registerNewUser} />
          </Grid>
        </Grid>
      </Grid>
      </div>
  );
};

export default Login;
