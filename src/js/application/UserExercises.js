import React from 'react';

function UserExercises({exercises ,isUserExercisesVisible}) {
 return (
   <div className={isUserExercisesVisible ? 'userExercises__search' : 'userExercises__search hidden' }>
     <div className={'userExercises__filter'}>
       <form className={'userExercises__form'}>
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
     <div className={'userExercises__display'}>
     
     </div>
  </div>
 );
}
export default UserExercises;