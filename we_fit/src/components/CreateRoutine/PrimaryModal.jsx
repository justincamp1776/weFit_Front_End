import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const PrimaryModal = (props) => {

    const[open, setOpen] = useState(false)
    const[lift, setLift] = useState()


    const handleOpen = () =>{
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }


   const handleSelect = (item) => {
        setLift(item)
        console.log("handleSelect :", lift);
        props.handlePrimeSelection(lift)
        handleClose();
    };
    
  
    return (  
      

        <div>
            {console.log("primary modal :", props)}
        <Button variant="text" size= "large" style={{color: "black"}} onClick={handleOpen}> Select 1st Exercise </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Primary Lift:</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                        <Table >
                           <thead>
                               <tr>
                                   <th>Name</th>
                                   <th>Action</th>
                               </tr>
                           </thead>
                           {props.primary_lifts.map((lift)=>(
                               <tbody>
                               <tr>
                                <td>{lift.name}</td>
                                <td>{lift.push_pull}</td>
                                <td><Button onClick={()=>handleSelect(lift)}>Select</Button></td>
                               </tr>
                           </tbody>
                           ))}
                          
                        </Table>
                    </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
            </Dialog>
    </div>
    );
}
 
export default PrimaryModal;
