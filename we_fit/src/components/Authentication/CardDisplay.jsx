import React from "react";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import React from "react";
import "./LoginForm.css";
import LoginForm from "./LoginForm";
import { Box } from "@mui/system";
import {Paper} from '@mui/material';
import CardDisplay from "./CardDisplay";
import TextField from "@mui/material/TextField";

const CardDisplay = () => {
  return (
    <div>
    <MDBContainer>
      <MDBCard
        className="card-body"
        style={{ width: "22rem", marginTop: "1rem" }}
      >
        <MDBCardTitle>Panel Title</MDBCardTitle>
        <MDBCardText>
          Welcome to weFIT. If you already have an account, click Log In.
          Othersise, join our fitness community by selecting the Join Here tab
        </MDBCardText>
        <div className="flex-row">
          <LoginForm /></div>
      </MDBCard>
    </MDBContainer>
    </div>
  );
};

export default CardDisplay;
