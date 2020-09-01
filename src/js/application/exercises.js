import React, {useEffect, useState} from 'react';
import firebase from "firebase";
import AddNewExercise from "./AddNewExercise";

function Exercises() {
  const [exercises, setExercises] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [isAddNewExVisible, setAddNewExVisible] = useState(false)
  
  const handleAddNewExVisible = (value) => {
    setAddNewExVisible(value)
  }
  const handleOn = () => handleAddNewExVisible(true)

  
  const rootRef = firebase.database().ref();
  const exercisesRef = rootRef.child('exercises')
  // console.log(exercisesRef);
  
  useEffect(() => {
    exercisesRef.on("value", snap => {
      // console.log(snap.uid);
      const values = snap.val();
      const tmp = [];
      let newKey;
      for (const key in values) {
        newKey = key;
        tmp.push({...values[key], id : newKey});
      }
      setExercises(tmp);
      setLoaded(true)
    })
  }, [])
  
  if (isLoaded !== true) {
    return <h1 className={'exercises__title'}>Loading data...</h1>
  }
  
  // console.log(typeof addNewExercise);
  
  
  return (
    <section className={'exercises'}>
      <h2 className={'exercises__title'}>Exercises</h2>
      <div className={'wrapper'}>
        <div className={'exercises__search'}>
          <form className={'exercises__form'}>
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
        <div className={'exercises__display'}>
          <div onClick={handleOn} className={'exercises__box exercises__box-add'}> Add exercise</div>
          {exercises.map(el => {
            return (
              <div className={'exercises__box'} key={el.id}> {el.name}</div>
            )
          })}
        </div>
        <AddNewExercise isAddNewExVisible={isAddNewExVisible} handleAddNewExVisible={handleAddNewExVisible}/>
      </div>
    </section>
  );
}

export default Exercises;