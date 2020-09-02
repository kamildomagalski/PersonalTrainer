import React, {useEffect, useState} from 'react';
import firebase from "firebase";

import AllExercises from "./AllExercises";
import UserExercises from "./UserExercises";

function Exercises() {
  const [exercises, setExercises] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [isAllExercisesVisible, setAllExercisesVisible]= useState(false)
  const [isUserExercisesVisible, setUserExercisesVisible]= useState(true)
  
  
  const handleAllExercisesOn= () =>{
    setAllExercisesVisible(true);
    setUserExercisesVisible(false);
  }
  const handleUserExercisesOn= () =>{
    setAllExercisesVisible(false);
    setUserExercisesVisible(true);
  }
  
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
        tmp.push({...values[key], id: newKey});
      }
      setExercises(tmp);
      setLoaded(true)
    })
  }, [])
  
  if (isLoaded !== true) {
    return <h1 className={'exercises__title'}>Loading data...</h1>
  }
  
  
  return (
    <section className={'exercises'}>
      <h2 className={'exercises__title'}>Exercises</h2>
      <div className={'wrapper'}>
        
        <div className={ isAllExercisesVisible ? 'tab tab__search activeBorder' : 'tab tab__search'} onClick={handleAllExercisesOn}>
          <h3 className={'tab__text'}>Search</h3>
        </div>
        
        <div className={isUserExercisesVisible ? 'tab tab__yourExercises activeBorder' : 'tab tab__yourExercises'} onClick={handleUserExercisesOn}>
          <h3 className={'tab__text'}>Your Exercises</h3>
        </div>
        
        <AllExercises exercises={exercises} isAllExercisesVisible={isAllExercisesVisible}/>
        <UserExercises exercises={exercises} isUserExercisesVisible={isUserExercisesVisible}/>
      </div>
    </section>
  );
}

export default Exercises;