import React, {useEffect, useState} from 'react';
import CloseXBtn from "../../components/CloseXBtn";
import {withFirebase} from '../../components/Firebase/IndexFirebase'


function AddNewPlan({isAddNewPlanVisible, handleAddNewPlanVisible, userData, firebase}) {
 
  const [userExercises, setUserExercises]= useState([])
  
  const userId=userData.id
  const rootRef = firebase.db.ref('users/' + userId);
  const userExercisesRef = rootRef.child('/userExercise')
  console.log(userExercises);
  useEffect(()=>{
    userExercisesRef.on("value", snap => {
    
      let values = snap.val();
      const tmpUser = [];
      for (const key in values) {
        tmpUser.push({...values[key]});
      }
      setUserExercises(tmpUser);
    })
  },[userId])
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
           <p className={'selectRow__text'}>Exercise 1:</p>
           <select name={'exercise1'}
                   className={'addNewPlan__input addNewPlan__select'}>
             <option>select...</option>
             {userExercises.map((el, i)=>{
               return (<option key={i}>{el.description}</option>
               )}
               
             )
             }
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
export default withFirebase(AddNewPlan);