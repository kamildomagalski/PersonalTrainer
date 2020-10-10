import React, {useEffect, useState} from 'react';
import CloseXBtn from "../../components/CloseXBtn";
import {withFirebase} from '../../components/Firebase/IndexFirebase'


function AddNewPlan({isAddNewPlanVisible, handleAddNewPlanVisible, userData, firebase}) {
  
  const [userExercises, setUserExercises] = useState([])
  const [exercise, setExercise] = useState({
    exerciseName: '',
    reps: '',
    series: '',
    duration: ''
  })
  const [exercisesList, setExercisesList] = useState([])
  
  const userId = userData.id
  const rootRef = firebase.db.ref('users/' + userId);
  const userExercisesRef = rootRef.child('/userExercise')
  const userPlansRef = rootRef.child('/userPlans').push()
  useEffect(() => {
    userExercisesRef.on("value", snap => {
      let values = snap.val();
      const tmpUser = [];
      for (const key in values) {
        tmpUser.push({...values[key]});
      }
      setUserExercises(tmpUser);
    })
  }, [userId])
  
  const handleExerciseChange = (e) => {
    const {name, value} = e.target;
    setExercise(prevState => ({
        ...prevState,
        [name]: value
      }
    ))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    userPlansRef.set(exercise)
    handleOff();
  }
  const handleAddExercise = (e) => {
    e.preventDefault();
    setExercisesList(prevState => ([
      ...prevState,
      exercise
    ]))
    clearExercise();
  }
  
  function clearExercise() {
    setExercise({
      exerciseName: '',
      reps: '',
      series: '',
      duration: ''
    })
  }
  
  
  const handleOff = () => {
    handleAddNewPlanVisible(false)
  }
  return (
    <div className={isAddNewPlanVisible ? 'addNewPlan' : 'addNewPlan hidden'}>
      <div className={'board addNewPlan__board'}>
        <CloseXBtn onClick={handleOff}/>
        <h2 className={'addNewPlan__title'}>Create new plan</h2>
        <div className={'formWrapper'}>
        <div className={'formWrapper__dataInput'}>
          <form className={'addNewPlan__form'}>
            <p className={'selectRow__text'}>Plan info:</p>
            <input type={'text'} name={'name'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'Add plan name'}/>
            <input type={'text'}
                   name={'description'}
                   className={'addNewPlan__input addNewPlan__description'} placeholder={'Add plan description'}/>
            <button type={'submit'}
                    onClick={handleSubmit}
                    className={'btn addNewPlan__btn btn-invalid'}>Add plan
            </button>
          </form>
          <form className={'addNewPlan__form addNewPlan__form-exercise'}>
            <p className={'selectRow__text'}>Exercise info:</p>
            <select name={'exerciseName'}
                    value={exercise.exerciseName}
                    className={'addNewPlan__input addNewPlan__select'}
                    onChange={handleExerciseChange}>
              <option value={'select...'}>select...</option>
              {userExercises.map((el, i) => {
                  return (
                    <option key={i} value={el.description}>{el.description}</option>
                  )
                }
              )}
            </select>
            <input name={'series'}
                   value={exercise.series}
                   onChange={handleExerciseChange}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'number of series'}/>
            
            <input name={'reps'}
                   value={exercise.reps}
                   onChange={handleExerciseChange}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'number of reps'}/>
            <input name={'duration'}
                   value={exercise.duration}
                   onChange={handleExerciseChange}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'duration'}/>
            <button type={'submit'}
                    onClick={handleAddExercise}
                    className={'btn addNewPlan__btn addNewPlan__btn-exercise btn-invalid'}>Add exercise
            </button>
          
          </form>
        </div>
          <ul>
            {exercisesList.map((el, i) => {
              return (
                <li key={i}>{el.exerciseName}</li>
              )
            })}
          </ul>
        </div>
        
      </div>
    
    </div>
  );
}

export default withFirebase(AddNewPlan);