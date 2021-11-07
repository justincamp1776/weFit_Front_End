import * as React from "react";
import { useState } from "react";
import "./LoginForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import RegistrationForm from "./RegistrationForm";


const LoginForm = (props) => {
    const [open, setOpen] = React.useState(false);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();



 const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }


    const handleNameChange = (event) =>{
        setUserName(event.target.value)
        console.log("handleNameChange:", userName)
    }

    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
        console.log("handlePasswordChange:", password)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const user = {username : userName, password : password}
        console.log("onSubmit:", user)
        console.log("Login Form Component Props :", props)
        props.userSignIn(user)
        handleClose();
    }


  return (
    <div>
     
    <Button variant="text" size= "large" style={{color: "whitesmoke"}} onClick={handleOpen}> Sign In Here </Button>
    
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Welcome Back!</DialogTitle>
      <DialogContent>
        <DialogContentText>
        </DialogContentText>
        <TextField 
        autoFocus
        margin="dense"
        name = "user name"
        label = "Username"
        fullWidth
        onChange={handleNameChange}
        variant="standard"
        />
        <TextField 
        autoFocus
        margin="dense"
        name = "password"
        label = "Password"
        fullWidth
        onChange={handlePasswordChange}
        variant="standard"
        />
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>

    

  </div>
 );
};

export default LoginForm;
