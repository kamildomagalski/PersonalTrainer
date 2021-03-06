import React, {useState} from 'react';
import AddNewExercise from "./AddNewExercise";
import ShowExerciseInfo from "./ShowExerciseInfo";
import AddExerciseBtn from "../../components/AddExerciseBtn";
import firebase from "firebase";


function AllExercises({exercises, isAllExercisesVisible, userData}) {
  const [exerciseInfo, setExerciseInfo] = useState([])
  const [isAddNewExVisible, setAddNewExVisible] = useState(false)
  const [isExInfoVisible, setExInfoVisible] = useState(false)
  
  const handleOn = () => handleAddNewExVisible(true)
  const handleInfoOn = () => handleExInfoVisible(true)
  
  const userId = userData.id;
  const rootRef = firebase.database().ref('users/' + userId);

  const handleChooseExercise = (exercise) => {
    const addData = {
      name: exercise.name,
      difficulty: exercise.name,
      type: exercise.name,
      muscleGroup: exercise.name,
      img: exercise.name,
      description: exercise.name,
      planDate: [],
      doneDate: []
    }
    
    rootRef.child('userExercise').child(exercise.id).update(addData);
  }
  
  
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
    <div className={isAllExercisesVisible ? 'allExercises__search' : 'allExercises__search hidden'}>
      <div className={'allExercises__filter'}>
        <form className={'allExercises__form'}>
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Difficulty:</p>
          <select className={'allExercises__select'} name={'difficulty'} placeholder={'difficulty'}>
            <option value={'easy'}>Easy</option>
            <option value={'medium'}>Medium</option>
            <option value={'hard'}>Hard</option>
          </select>
          </div>
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Muscle group:</p>
          <select  className={'allExercises__select'} name={'muscle group'} placeholder={'muscle group'}>
            <option value={'upper body'}>Upper body</option>
            <option value={'lower body'}>Lower body</option>
          </select>
          </div>
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Type:</p>
          <select className={'allExercises__select'} name={'type'} placeholder={'type'}>
            <option value={'indoor'}>Indoor</option>
            <option value={'outdoor'}>Outdoor</option>
          </select>
          </div>
        </form>
      </div>
      <div className={'allExercises__display'}>
        <div className={'allExercises__box allExercises__box-add'}>
          <button className={'btn allExercises__btn'} onClick={handleOn}>
            Add exercise
          </button>
        </div>
        {exercises.map(exercise => {
          return (
            <div className={'allExercises__box'}
                 key={exercise.id}>
              <button className={'btn allExercises__btn'} onClick={(event) => {
                handleInfoOn();
                handleEXInfo(exercise);
              }}>Show info
              </button>
              
              <AddExerciseBtn onClick={() => {
                handleChooseExercise(exercise)
              }}/>
              <p className={'boxTitle'}>{exercise.name}</p>
            </div>
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