import React, {useState} from 'react';
import CloseX from "../components/closeX";

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
        <CloseX onClick={() => {
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
      </div>
    </div>
  );
}

export default ShowExerciseInfo;