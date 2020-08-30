import React from 'react';
import CloseX from "../components/closeX";
import {FirebaseContext} from '../components/Firebase/indexFirebase';
import LogInForm from "../components/logic_components/logIn_form";

function LogInPage({history, isVisible, onVisibilityChange, handleSignUpVisible}) {
  
  const handleOff = () => {
    onVisibilityChange(false)
  }
  const handleOn = () => {
    handleSignUpVisible(true)
    onVisibilityChange(false)
  }
  
  return (
    <section className={isVisible ? 'logIn' : 'logIn hidden'}>
      <div className={'board logIn__board'}>
        <CloseX onClick={handleOff}/>
        <h2 className={'logIn__title'}>Welcome to</h2>
        <h2 className={'logIn__title'}>Personal Trainer!</h2>
        <FirebaseContext.Consumer>
          {firebase => <LogInForm firebase={firebase} handleOff={handleOff} history={history}/>}
        </FirebaseContext.Consumer>
        <p className={'logIn__text'}>or</p>
        <button onClick={handleOn} className={'btn logIn__btn logIn__btn-create'}>CREATE ACCOUNT</button>
      </div>
    </section>
  );
}

export default LogInPage;