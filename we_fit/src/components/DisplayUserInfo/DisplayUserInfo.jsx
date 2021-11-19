import React, { useState } from "react";

const DisplayUserInfo = (props) => {
  return (
    <div style={{ color: "white" }}>
      {props.userInfo ? (
        <div>
          <h3>Hello, {props.userInfo.first_name}</h3>
          <h5> Weight: {props.userInfo.weight}lbs</h5>
          <h5> Weight: {props.userInfo.height} inches</h5>
        </div>
      ) : (
        <h1>Hello</h1>
      )}
    </div>
  );
};

export default DisplayUserInfo;
