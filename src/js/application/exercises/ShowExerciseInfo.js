import React from 'react';
import CloseXBtn from "../../components/CloseXBtn";

function ShowExerciseInfo({isExInfoVisible, handleExInfoVisible, clearExerciseInfo, exerciseInfo}) {
  
  
  const handleOff = () => {
    handleExInfoVisible(false);
  }
  const handleClearInfo = () => {
    clearExerciseInfo();
  }
  
  return (
    <div className={isExInfoVisible ? 'exerciseInfo' : 'exerciseInfo hidden'}>
      <div className={'board exerciseInfo__board'}>
        <CloseXBtn onClick={() => {
          handleOff();
          handleClearInfo();
        }}/>
        <div className={'exerciseInfo__image'}>image</div>
        <div className={'exerciseInfo__wrapper'}>
          <h3 className={'exerciseInfo__title'}>Workout:</h3>
          
          <p className={'exerciseInfo__subtitle'}>{exerciseInfo.name}</p>
          <h3 className={'exerciseInfo__title'}>Bodypart:</h3>
          <p className={'exerciseInfo__subtitle'}>{exerciseInfo.muscleGroup}</p>
          <h3 className={'exerciseInfo__title'}>Description:</h3>
          <p className={'exerciseInfo__subtitle'}>{exerciseInfo.description}</p>
          
        </div>
        <div className={'exerciseInfo__float'}>
          <p className={'exerciseInfo__additional'}>Difficulty: {exerciseInfo.difficulty}</p>
          <p className={'exerciseInfo__additional'}>Type: {exerciseInfo.type}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowExerciseInfo;