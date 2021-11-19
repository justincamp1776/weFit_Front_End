import React, {useState} from 'react';

const DisplayUserInfo = (props) => {

    return (  
        <div>
        {props.userInfo ? <h1>Hello, {props.userInfo.first_name}</h1> : <h1>Hello</h1>}
        </div>
    );
}
 
export default DisplayUserInfo;