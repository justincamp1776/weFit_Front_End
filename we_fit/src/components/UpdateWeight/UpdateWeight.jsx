import React, {useState} from 'react';
import { Form} from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UpdateWeight = (props) => {
    const[open, setOpen] = useState(false)
    const[weight, setWeight] = useState();

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }

    const  handleFormChange = (event) => {
        setWeight(event.target.value)
         console.log("handleFormChange :", weight);
     };
     
     const handleSubmit = (event) => {
         event.preventDefault();
         console.log("handleSubmit :", weight);
         props.editWeight(weight);
         handleClose();
     };

    return (  
        <div>
        {console.log("user :", props.userInfo, "weight :", props.userInfo.weight)}
    <Button variant="text" size= "large" style={{color: "black"}} onClick={handleOpen}> Edit </Button>

        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>weFit</DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
                    <Form >
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Edit Goal</Form.Label>
                            <Form.Control
                            placeholder= {props.goal.custom_goal}
                            
                            onChange = {handleFormChange}
                            as ="textarea"
                            rows={5}
                            />
                        </Form.Group>
                    </Form>
                </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick ={handleSubmit}>Submit</Button>
        </DialogActions>
        </Dialog>
</div>
    );
}
 
export default UpdateWeight;