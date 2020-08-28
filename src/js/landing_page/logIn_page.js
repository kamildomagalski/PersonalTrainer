import React from 'react';
import CloseX from "../components/closeX";
import {Link} from "react-router-dom";

function LogInPage({isVisible, onVisibilityChange, handleSignUpVisible}) {
 
  const handleOff= () =>{
    onVisibilityChange(false)
  }
  const handleOn= ()=>{
    handleSignUpVisible(true)
    onVisibilityChange(false)
  }
  
 return (
  <section className={isVisible ? 'logIn': 'logIn hidden'}>
    <div className={'board logIn__board'}>
      <CloseX onClick={handleOff}/>
      <h2 className={'logIn__title'}>Welcome to</h2>
      <h2 className={'logIn__title'}>Personal Trainer!</h2>
      <input type={'text'} className={'logIn__input'} placeholder={'Username'}/>
      <input type={'password'} className={'logIn__input'} placeholder={'Password'}/>
      <Link to={'/app'} className={'btn logIn__btn logIn__btn-log'}>LOG IN</Link>
      <p className={'logIn__text'}>or</p>
      <button onClick={handleOn} className={'btn logIn__btn logIn__btn-create'}>CREATE ACCOUNT</button>
    </div>
  </section>
 );
}
export default LogInPage;