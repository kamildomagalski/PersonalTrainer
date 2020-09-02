import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function AddExercise({onClick}) {
 
 return (
  <div className={'addExercise'}>
    <FontAwesomeIcon className={'addExercise__icon'} icon="plus" />
  </div>
 );
}
export default AddExercise;