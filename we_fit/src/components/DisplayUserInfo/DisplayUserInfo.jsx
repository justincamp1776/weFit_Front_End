import React, { useState } from "react";
import UpdateWeight from "../UpdateWeight/UpdateWeight";

const DisplayUserInfo = (props) => {
  return (
    <div style={{ color: "white" }}>
      {props.userInfo ? (
        <div>
          <h3> Hello, {props.userInfo.first_name}</h3>
          <h5> Height: {props.userInfo.height} inches</h5>
          <h5> Weight: {props.userInfo.weight}lbs</h5> <UpdateWeight userInfo={props.userInfo}/>
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
};

export default DisplayUserInfo;
