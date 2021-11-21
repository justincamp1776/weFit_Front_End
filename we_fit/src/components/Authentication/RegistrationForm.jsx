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
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }
    const handleFnameChange = (event) =>{
        setFirstName(event.target.value)
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
        props.registerNewUser(newUser)
        handleClose();
    }


  return (
    <div>
    <button className="button"   onClick={handleOpen}> Create Account </button>

        <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Create Your Account Here </DialogTitle>
        <DialogContent>
            <DialogContentText>
            Welcome! WE are glad that you have chosen to become apart of the weFit community. 
            Please introduce yourself by filling out the form below. You have 3 FREE workouts 
            waiting for you on the other side!
            </DialogContentText>
                <TextField 
                autoFocus
                margin="dense"
                name = "email"
                label = "Email"
                fullWidth
                onChange={handleEmailChange}
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
                <TextField 
                autoFocus
                margin="dense"
                name = "firstName"
                label = "First Name"
                fullWidth
                onChange={handleFnameChange}
                variant="standard"
                />
                <TextField 
                autoFocus
                margin="dense"
                name = "lastName"
                label = "Last Name"
                fullWidth
                onChange={handleLnameChange}
                variant="standard"
                />
                <TextField 
                autoFocus
                margin="dense"
                name = "middleName"
                label = "Middle Name"
                fullWidth
                onChange={handleMnameChange}
                variant="standard"
                />
                <TextField 
                autoFocus
                margin="dense"
                name = "Birth Date"
                label = "DOB: yyyy-mm-dd"
                fullWidth
                onChange={handleBdayChange}
                variant="standard"
                />
                <TextField 
                autoFocus
                margin="dense"
                name = "height"
                label = "Height"
                fullWidth
                onChange={handleHeightChange}
                variant="standard"
                />
                <TextField 
                autoFocus
                margin="dense"
                name = "weight"
                label = "Weight"
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
