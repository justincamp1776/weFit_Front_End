import React, {useState} from 'react';
import { Card, ListGroup} from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import './SingleExercise.css';

const SingleExercise = (props) => {

    const[open, setOpen] = useState(false);

    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }



    return (  
        <div>
        <Button variant="text" size= "large" style={{color: "black"}} onClick={handleOpen}> Details </Button>
    
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle>weFit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <Card className="dialog" style={{ width: '30rem'}}>
                    <Card.Header style={{backgroundColor: "black", color: "whitesmoke"}}> {props.exercise.name}:</Card.Header>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Plane of Movement : {props.exercise.plane}</ListGroup.Item>
                    <ListGroup.Item>Symetries : {props.exercise.num_of_limbs}</ListGroup.Item>
                    <ListGroup.Item>Primary Mover : {props.exercise.agonist}</ListGroup.Item>
                    <ListGroup.Item>Stabilizers : {props.exercise.synergist}</ListGroup.Item>
                    <ListGroup.Item>{props.exercise.about}</ListGroup.Item>
                     </ListGroup>
                    </Card>
                    </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button >Submit</Button>
            </DialogActions>
            </Dialog>
    </div>
    );
}
 
export default SingleExercise;