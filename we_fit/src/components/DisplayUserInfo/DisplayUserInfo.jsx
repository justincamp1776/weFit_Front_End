import axios from "axios";
import React, { useState } from "react";
import UpdateWeight from "../UpdateWeight/UpdateWeight";

const DisplayUserInfo = (props) => {
    // const[weight, setWeight]= useState(props.userInfo.weight);

    const updateWeight = async(weight)=>{
        console.log("dsplay user props :", props.user)
       const response = await axios.patch(`http://127.0.0.1:8000/api/auth/${props.user.user_id}/`, weight)
       return response.status
    }

  return (
    <div style={{ color: "white", fontFamily: "-moz-initial" }}>
      {props.userInfo ? (
        <div>
          <h3> hello, {props.userInfo.first_name}!</h3>
          <h5> Height: {props.userInfo.height} inches</h5>
          <h5> Weight: {props.userInfo.weight}lbs</h5> <UpdateWeight updateWeight={updateWeight}userInfo={props.userInfo}/>
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
};

export default DisplayUserInfo;
