import React from 'react';

const WorkoutTypeSelector = (props) => {
    return (  
        <select
         
          className="browser-default custom-select"
        >
          <option>I want to :</option>
          <option value="Burn Fat and Lose Weight">
            Burn Fat and Lose Weight
          </option>
          <option value="Increase Maximum Strength">
            Increase Maximum Strength
          </option>
          <option value="Increase Muscle Size">Increase Muscle Size</option>
        </select>
    //      {this.state.selected_goal ? <div>it is</div> : null}
    );
}
 
export default WorkoutTypeSelector;