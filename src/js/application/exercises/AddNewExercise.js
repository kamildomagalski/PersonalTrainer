import React, {useState} from 'react';
import CloseXBtn from "../../components/CloseXBtn";
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
  
  const handleOff = () => {
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
          
          <input type={'text'} name={'name'} value={addNewExercise.name} onChange={handleAddNewEx}
                 className={'addNewExercise__input addNewExercise__name'} placeholder={'Add name'}/>
          <textarea type={'text'} name={'description'} value={addNewExercise.description} onChange={handleAddNewEx}
                 className={'addNewExercise__input addNewExercise__description'} placeholder={'Add description'}/>
                 
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Difficulty:</p>
          <select name={'difficulty'}
                  placeholder={'difficulty'}
                  value={addNewExercise.difficulty}
                  onChange={handleAddNewEx}
                  className={'addNewExercise__input addNewExercise__select'}>
            <option value={'easy'}>Easy</option>
            <option value={'medium'}>Medium</option>
            <option value={'hard'}>Hard</option>
          </select>
          </div>
          <div className={'selectRow'}>
            <p className={'selectRow__text'}>Muscle group:</p>
          <select name={'muscleGroup'}
                  placeholder={'muscle group'}
                  value={addNewExercise.muscleGroup}
                  onChange={handleAddNewEx}
                  className={'addNewExercise__input addNewExercise__select'}>
            <option value={'upper body'}>Upper body</option>
            <option value={'lower body'}>Lower body</option>
          </select>
          </div>
          <div className={'selectRow'}>
          <p className={'selectRow__text'}>Type:</p>
          <select name={'type'}
                  placeholder={'type'}
                  value={addNewExercise.type}
                  onChange={handleAddNewEx}
                  className={'addNewExercise__input addNewExercise__select'}>
            <option value={'indoor'}>Indoor</option>
            <option value={'outdoor'}>Outdoor</option>
          </select>
          </div>
          <button className={isInvalid ? 'btn addNewExercise__btn btn-invalid' : 'btn addNewExercise__btn'} type={'submit'} disabled={isInvalid}  >Add exercise</button>
        </form>
      </div>
    
    </div>
  );
}

export default AddNewExercise;