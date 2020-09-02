import React, { useState } from 'react';
import CloseXBtn from "../components/CloseXBtn";
import firebase from "firebase";

function AddNewExercise({isAddNewExVisible, handleAddNewExVisible}) {
 
 const [addNewExercise, setNewExercise] = useState({
  id: null,
  name: '',
  difficulty: '',
  type: '',
  muscleGroup: '',
  img: '',
  description: ''
 })
 
 const handleOff=()=>{
  handleAddNewExVisible(false)
 }
 
 const handleSubmit = (event) => {
  event.preventDefault();
  const exerciseRef = firebase.database().ref('exercises').push();
  const newEx = addNewExercise;
  exerciseRef.set(newEx);
  handleOff();
 }
 
 const handleAddNewEx = (event) => {
  const {name, value} = event.target;
  setNewExercise(prevState => {
   return {
    ...prevState,
    [name]: value
   }
  })
 }
 
 const isInvalid =
   addNewExercise.name === '' ||
   addNewExercise.description === '' ||
   addNewExercise.difficulty === '' ||
   addNewExercise.type === '' ||
   addNewExercise.muscleGroup === '';
 
 return (
   <div className={isAddNewExVisible ? 'addNewExercise' : 'addNewExercise hidden'}>
    <div className={'board addNewExercise__board'}>
     <CloseXBtn onClick={handleOff}/>
     <h2 className={'addNewExercise__title'}>Add new exercise</h2>
     <form className={'addNewExercise__form'} onSubmit={handleSubmit}>
      <input type={'text'} name={'name'} value={addNewExercise.name} onChange={handleAddNewEx}/>
      <input type={'text'} name={'description'} value={addNewExercise.description} onChange={handleAddNewEx}/>
     
      <select name={'difficulty'}
              placeholder={'difficulty'}
              value={addNewExercise.difficulty}
              onChange={handleAddNewEx}>
       <option value={'easy'}>Easy</option>
       <option value={'medium'}>Medium</option>
       <option value={'hard'}>Hard</option>
      </select>
     
      <select name={'muscleGroup'}
              placeholder={'muscle group'}
              value={addNewExercise.muscleGroup}
              onChange={handleAddNewEx}>
       <option value={'upper body'}>Upper body</option>
       <option value={'lower body'}>Lower body</option>
      </select>
     
      <select name={'type'}
              placeholder={'type'}
              value={addNewExercise.type}
              onChange={handleAddNewEx}>
       <option value={'indoor'}>Indoor</option>
       <option value={'outdoor'}>Outdoor</option>
      </select>
      <button type={'submit'} disabled={isInvalid}>Add exercise</button>
     </form>
    </div>
  
   </div>
 );
}
export default AddNewExercise;