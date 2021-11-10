import React, {useState} from 'react';
import PrimaryModal from "./PrimaryModal";

const CreateRoutine = (props) => {

    const[exOne, setExOne] = useState();


    const handlePrimeSelection = (exercise) =>{
        setExOne(exercise)
        console.log("handlePrimeSelection :", exOne)
    }


    return (  
        <div>
            <PrimaryModal  primary_lifts={props.primary_lifts} handlePrimeSelection={handlePrimeSelection}/>
        </div>
    );
}
 
export default CreateRoutine;