import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function AddExerciseBtn({onClick}) {
 
 return (
  <div className={'addExercise'} onClick={onClick}>
    <FontAwesomeIcon className={'addExercise__icon'} icon="plus" />
  </div>
 );
}
export default AddExerciseBtn;