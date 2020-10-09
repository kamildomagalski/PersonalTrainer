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
  const [test, setTest]= useState({
    exerciseName: '',
    reps: '',
    series: '',
    duration: ''
  })
  const [testList, setTestList]=useState([])
  
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
  const handleTestChange = (e) => {
    const {name, value} = e.target;
    setTest(prevState => ({
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
  const handleAddExercise= (e) => {
    e.preventDefault();
    setTestList(prevState => ([
      ...prevState,
        test
      ]))
    
  }
  console.log(testList);
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
                      value={test.exerciseName}
                      className={'addNewPlan__input addNewPlan__select'}
                      onChange={handleTestChange}>
                <option value={'select...'}>select...</option>
                {userExercises.map((el, i) => {
                    return (
                      <option key={i} value={el.description}>{el.description}</option>
                    )
                  }
                )}
              </select>
              <input name={'series'}
                     value={test.series}
                     onChange={handleTestChange}
                     type={'number'}
                     className={'addNewPlan__input addNewPlan__name'} placeholder={'number of series'}/>
              
              <input name={'reps'}
                     value={test.reps}
                     onChange={handleTestChange}
                     type={'number'}
                     className={'addNewPlan__input addNewPlan__name'} placeholder={'number of reps'}/>
              <input name={'duration'}
                     value={test.duration}
                     onChange={handleTestChange}
                     type={'number'}
                     className={'addNewPlan__input addNewPlan__name'} placeholder={'duration'}/>
            </div>
          
          <button onClick={handleAddExercise} className={'btn addNewExercise__btn btn-invalid'} type={'submit'}>Add plan
          </button>
        </form>
      </div>
    
    </div>
  );
}

export default withFirebase(AddNewPlan);