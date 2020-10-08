import React, {useEffect, useState} from 'react';
import CloseXBtn from "../../components/CloseXBtn";
import {withFirebase} from '../../components/Firebase/IndexFirebase'


function AddNewPlan({isAddNewPlanVisible, handleAddNewPlanVisible, userData, firebase}) {
  
  const [userExercises, setUserExercises] = useState([])
  const [exercise1, setExercise1] = useState({
    exerciseName: '',
    reps: '',
    series: '',
    duration: ''
  })
  

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
  
  const handleExercise1Change = (e) => {
    const {name, value} = e.target;
    setExercise1(prevState => ({
        ...prevState,
        [name]: value
      }
    ))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    userPlansRef.set(exercise1)
    handleOff();
  }
  
  
  const handleOff = () => {
    handleAddNewPlanVisible(false)
  }
  return (
    <div className={isAddNewPlanVisible ? 'addNewPlan' : 'addNewPlan hidden'}>
      <div className={'board addNewPlan__board'}>
        <CloseXBtn onClick={handleOff}/>
        <h2 className={'addNewPlan__title'}>Create new plan</h2>
        <form className={'addNewPlan__form'}>
          <input type={'text'} name={'name'}
                 className={'addNewPlan__input addNewPlan__name'} placeholder={'Add name'}/>
          <input type={'text'}
                 name={'description'}
                 className={'addNewPlan__input addNewPlan__description'} placeholder={'Add description'}/>
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Exercise 1:</p>
            <select name={'exerciseName'}
                    value={exercise1.exerciseName}
                    className={'addNewPlan__input addNewPlan__select'}
                    onChange={handleExercise1Change}>
              <option value={'select...'}>select...</option>
              {userExercises.map((el, i) => {
                  return (
                    <option key={i} value={el.description}>{el.description}</option>
                  )
                }
              )}
            </select>
            <input name={'series'}
                   value={exercise1.series}
                   onChange={handleExercise1Change}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'number of series'}/>
            
            <input name={'reps'}
                   value={exercise1.reps}
                   onChange={handleExercise1Change}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'number of reps'}/>
            <input name={'duration'}
                   value={exercise1.duration}
                   onChange={handleExercise1Change}
                   type={'number'}
                   className={'addNewPlan__input addNewPlan__name'} placeholder={'duration'}/>
          </div>
          
          <button onClick={handleSubmit} className={'btn addNewExercise__btn btn-invalid'} type={'submit'}>Add plan
          </button>
        </form>
      </div>
    
    </div>
  );
}

export default withFirebase(AddNewPlan);