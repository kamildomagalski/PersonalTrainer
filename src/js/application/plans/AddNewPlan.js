import React, { useState } from 'react';
import CloseXBtn from "../../components/CloseXBtn";


function AddNewPlan({isAddNewPlanVisible, handleAddNewPlanVisible}) {
 
 const handleOff= ()=>{
 handleAddNewPlanVisible(false)
 }
 return (
   <div className={isAddNewPlanVisible ? 'addNewPlan' : 'addNewPlan hidden'}>
     <div className={'board addNewPlan__board'}>
       <CloseXBtn onClick={handleOff}/>
       <h2 className={'addNewPlan__title'}>Create new plan</h2>
       <form className={'addNewPlan__form'} >
        
         <input type={'text'} name={'name'}
                className={'addNewPlan__input addNewPlan__name'} placeholder={'Add name'}/>
         <input type={'text'} name={'description'}
                className={'addNewPlan__input addNewPlan__description'} placeholder={'Add description'}/>
        
         <div className={'selectRow'}>
           <p className={'selectRow__text'}>Difficulty:</p>
           <select name={'difficulty'}
                   placeholder={'difficulty'}
                   className={'addNewPlan__input addNewPlan__select'}>
             <option value={'easy'}>Easy</option>
             <option value={'medium'}>Medium</option>
             <option value={'hard'}>Hard</option>
           </select>
         </div>
         
         <button className={'btn addNewExercise__btn btn-invalid'} type={'submit'}>Add plan</button>
       </form>
     </div>
  
   </div>
 );
}
export default AddNewPlan;