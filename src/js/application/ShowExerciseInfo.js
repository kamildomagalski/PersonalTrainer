import React, { useState } from 'react';
import CloseX from "../components/closeX";

function ShowExerciseInfo({isExInfoVisible ,handleExInfoVisible}) {

 
 const handleOff= ()=> {
   handleExInfoVisible(false);
 }

 
 return (
   <div className={isExInfoVisible ? 'showExerciseInfo' : 'showExerciseInfo hidden'}>
     <div className={'board showExerciseInfo__board'}>
       <CloseX onClick={handleOff}/>
       <h2 className={'showExerciseInfo__title'}>Exercise info</h2>
       <h3>Name</h3>
       <h3>Description</h3>
       <p>Stand up, go down, repeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, voluptatum?</p>
     </div>
  </div>
 );
}
export default ShowExerciseInfo;