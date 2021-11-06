import * as React from "react";
import { useState } from "react";
import "./RegistrationForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const RegistrationForm = (props) => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [middleName, setMiddleName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();



 const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const handleEmailChange = (event) =>{
        setEmail(event.target.value)
        console.log("handleNameChange:", email)
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
        console.log("handlePasswordChange:", password)
    }
    const handleFnameChange = (event) =>{
        setFirstName(event.target.value)
        console.log("handlePasswordChange:", firstName)
    }
    const handleLnameChange = (event) =>{
        setLastName(event.target.value)
        console.log("handlePasswordChange:", lastName)
    }
    const handleMnameChange = (event) =>{
        setMiddleName(event.target.value)
        console.log("handlePasswordChange:", middleName)
    }
    const handleBdayChange = (event) =>{
        setBirthDate(event.target.value)
        console.log("handlePasswordChange:", birthDate)
    }
    const handleHeightChange = (event) =>{
        setHeight(event.target.value)
        console.log("handlePasswordChange:", height)
    }
    const handleWeightChange = (event) =>{
        setWeight(event.target.value)
        console.log("handlePasswordChange:", weight)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newUser = {
            username : email,
            email : email,
            password : password,
            first_name : firstName,
            last_name : lastName,
            middle_name : middleName,
            birth_date : birthDate,
            height : height,
            weight : weight,
        }
        console.log("onSubmit:", newUser)
        handleClose();
    }


  return (
    <div>
    <Button variant="text" size= "large" style={{color: "whitesmoke"}}  onClick={handleOpen}> Create Account </Button>


        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Register Here</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Welcome to weFIT. WE are glad that you have chosen to become apart of our community!
            Lets get FIT together!
            </DialogContentText>
            <TextField 
            autoFocus
            margin="dense"
            name = "email"
            label = "email"
            fullWidth
            onChange={handleEmailChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "password"
            label = "password"
            fullWidth
            onChange={handlePasswordChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "firstName"
            label = "firstName"
            fullWidth
            onChange={handleFnameChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "lastName"
            label = "lastName"
            fullWidth
            onChange={handleLnameChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "middleName"
            label = "middleName"
            fullWidth
            onChange={handleMnameChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "birthDate"
            label = "birthDate"
            fullWidth
            onChange={handleBdayChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "height"
            label = "height"
            fullWidth
            onChange={handleHeightChange}
            variant="standard"
            />
            <TextField 
            autoFocus
            margin="dense"
            name = "weight"
            label = "weight"
            fullWidth
            onChange={handleWeightChange}
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

export default RegistrationForm;
