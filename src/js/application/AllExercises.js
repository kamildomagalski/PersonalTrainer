import React, { useState } from 'react';
import AddNewExercise from "./AddNewExercise";
import ShowExerciseInfo from "./ShowExerciseInfo";


function AllExercises({exercises,isAllExercisesVisible }) {
  const [exerciseInfo, setExerciseInfo] = useState([])
  const [isAddNewExVisible, setAddNewExVisible] = useState(false)
  const [isExInfoVisible, setExInfoVisible] = useState(false)
  
  const handleOn = () => handleAddNewExVisible(true)
  const handleInfoOn = () => handleExInfoVisible(true)
  
  const handleEXInfo = (exercise) => {
    setExerciseInfo(exercise);
  }
  const clearExerciseInfo = () => {
    setExerciseInfo([])
  }
  
  const handleExInfoVisible = (value) => {
    setExInfoVisible(value);
  }
  const handleAddNewExVisible = (value) => {
    setAddNewExVisible(value)
  }
  
  return (
   <div className={isAllExercisesVisible ? 'allExercises__search': 'allExercises__search hidden' }>
     <div className={'allExercises__filter'}>
       <form className={'allExercises__form'}>
         <select name={'difficulty'} placeholder={'difficulty'}>
           <option value={'easy'}>Easy</option>
           <option value={'medium'}>Medium</option>
           <option value={'hard'}>Hard</option>
         </select>
         <select name={'muscle group'} placeholder={'muscle group'}>
           <option value={'upper body'}>Upper body</option>
           <option value={'lower body'}>Lower body</option>
         </select>
         <select name={'type'} placeholder={'type'}>
           <option value={'indoor'}>Indoor</option>
           <option value={'outdoor'}>Outdoor</option>
         </select>
       </form>
     </div>
     <div className={'allExercises__display'}>
       <div onClick={handleOn} className={'allExercises__box allExercises__box-add'}> Add exercise</div>
       {exercises.map(exercise => {
         return (
           <div className={'allExercises__box'}
                onClick={(event) => {
                  handleInfoOn();
                  handleEXInfo(exercise);
                }} key={exercise.id}> {exercise.name}</div>
         )
       })}
     </div>
    
     <AddNewExercise
       isAddNewExVisible={isAddNewExVisible}
       handleAddNewExVisible={handleAddNewExVisible}/>
    
     <ShowExerciseInfo
       isExInfoVisible={isExInfoVisible}
       handleExInfoVisible={handleExInfoVisible}
       clearExerciseInfo={clearExerciseInfo}
       exerciseInfo={exerciseInfo}/>
   </div>
 );
}
export default AllExercises;