import React from "react";
import WorkoutType from "../WorkoutType/WorkoutType";
import DisplayRoutine from "../DisplayRoutine/DisplayRoutine";


const Routines = (props) => {
  return (
    <div>
      <WorkoutType />
      <DisplayRoutine />
    </div>
  );
};

export default Routines;
