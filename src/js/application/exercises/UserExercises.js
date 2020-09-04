import React, {useState} from 'react';
import ShowExerciseInfo from "./ShowExerciseInfo";


function UserExercises({userExercises, isUserExercisesVisible  }) {
  const [exerciseInfo, setExerciseInfo] = useState([])
  const [isExInfoVisible, setExInfoVisible] = useState(false)
  
  const handleInfoOn = () => handleExInfoVisible(true)
  const handleEXInfo = (exercise) => {
    setExerciseInfo(exercise);
  }
  const handleExInfoVisible = (value) => {
    setExInfoVisible(value);
  }
  const clearExerciseInfo = () => {
    setExerciseInfo([])
  }
  return (
   <div className={isUserExercisesVisible ? 'userExercises__search' : 'userExercises__search hidden' }>
     <div className={'userExercises__filter'}>
       <form className={'userExercises__form'}>
         <div className={'selectRow'}>
           <p className={'selectRow__text'}>Difficulty:</p>
         <select className={'userExercises__select'} name={'difficulty'} placeholder={'difficulty'}>
           <option value={'easy'}>Easy</option>
           <option value={'medium'}>Medium</option>
           <option value={'hard'}>Hard</option>
         </select>
         </div>
         <div className={'selectRow'}>
           <p className={'selectRow__text'}>Muscle group:</p>
         <select className={'userExercises__select'} name={'muscle group'} placeholder={'muscle group'}>
           <option value={'upper body'}>Upper body</option>
           <option value={'lower body'}>Lower body</option>
         </select>
         </div>
         <div className={'selectRow'}>
           <p className={'selectRow__text'}>Type:</p>
         <select className={'userExercises__select'} name={'type'} placeholder={'type'}>
           <option value={'indoor'}>Indoor</option>
           <option value={'outdoor'}>Outdoor</option>
         </select>
         </div>
       </form>
     </div>
     <div className={'userExercises__display'}>
       {userExercises.map(exercise => {
         return (
           <div className={'allExercises__box'}
                key={exercise.id}>
             <button className={'btn allExercises__btn'} onClick={() => {
               handleInfoOn();
               handleEXInfo(exercise);
             }}>Show info
             </button>
             
             <p className={'boxTitle'}>{exercise.name}</p>
           </div>
         )
       })}
     </div>
     <ShowExerciseInfo
       isExInfoVisible={isExInfoVisible}
       handleExInfoVisible={handleExInfoVisible}
       clearExerciseInfo={clearExerciseInfo}
       exerciseInfo={exerciseInfo}/>
  </div>
 );
}
export default UserExercises;