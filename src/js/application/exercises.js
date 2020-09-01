import React, {useEffect, useState} from 'react';
import firebase from "firebase";
import CloseX from "../components/closeX";

function Exercises() {
  const [exercises, setExercises] = useState([])
  const [isLoaded, setLoaded] = useState(false)
  const [isAddNewExVisible, setAddNewExVisible] = useState(false)
  
  const [addNewExercise, setNewExercise] = useState({
    id: null,
    name: '',
    difficulty: '',
    type: '',
    muscleGroup: '',
    img: '',
    description: ''
  })
  
  const handleAddOn = () => setAddNewExVisible(true)
  const handleAddOff = () => setAddNewExVisible(false)
  
  
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
  const handleAddNewEx = (event) => {
    const {name, value} = event.target;
    setNewExercise(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const exerciseRef = firebase.database().ref('exercises').push();
    const newEx = addNewExercise;
    exerciseRef.set(newEx);
    handleAddOff();
  }
  
  const isInvalid =
    addNewExercise.name === '' ||
    addNewExercise.description === '' ||
    addNewExercise.difficulty === '' ||
    addNewExercise.type === '' ||
    addNewExercise.muscleGroup === '';
  
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
          <div onClick={handleAddOn} className={'exercises__box exercises__box-add'}> Add exercise</div>
          {exercises.map(el => {
            return (
              <div className={'exercises__box'} key={el.id}> {el.name}</div>
            )
          })}
        </div>
        
        
        <div className={isAddNewExVisible ? 'addNewExercise' : 'addNewExercise hidden'}>
          <div className={'board addNewExercise__board'}>
            <CloseX onClick={handleAddOff}/>
            <h2 className={'addNewExercise__title'}>Add new exercise</h2>
            <form className={'addNewExercise__form'} onSubmit={handleSubmit}>
              
              <input type={'text'} name={'name'} value={addNewExercise.name} onChange={handleAddNewEx}/>
              
              <input type={'text'} name={'description'} value={addNewExercise.description} onChange={handleAddNewEx}/>
              
              <select name={'difficulty'} placeholder={'difficulty'} value={addNewExercise.difficulty}
                      onChange={handleAddNewEx}>
                <option value={'easy'}>Easy</option>
                <option value={'medium'}>Medium</option>
                <option value={'hard'}>Hard</option>
              </select>
              
              <select name={'muscleGroup'} placeholder={'muscle group'} value={addNewExercise.muscleGroup}
                      onChange={handleAddNewEx}>
                <option value={'upper body'}>Upper body</option>
                <option value={'lower body'}>Lower body</option>
              </select>
              
              <select name={'type'} placeholder={'type'} value={addNewExercise.type} onChange={handleAddNewEx}>
                <option value={'indoor'}>Indoor</option>
                <option value={'outdoor'}>Outdoor</option>
              </select>
              <button type={'submit'} disabled={isInvalid}>Add exercise</button>
            </form>
          </div>
        
        </div>
      </div>
    </section>
  );
}

export default Exercises;