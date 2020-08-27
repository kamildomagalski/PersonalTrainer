import React from 'react';
import CloseX from "../components/closeX";

function LogInSection({isVisible, onVisibilityChange}) {
 
  const handleOff= () =>{
    onVisibilityChange(false)
  }
  
 return (
  <section className={isVisible ? 'logIn': 'logIn hidden'}>
    <div className={'board logIn__board'}>
      <CloseX onClick={handleOff}/>
      <h2 className={'logIn__title'}>Welcome to</h2>
      <h2 className={'logIn__title'}>Personal Trainer!</h2>
      <input type={'text'} className={'logIn__input'} placeholder={'Username'}/>
      <input type={'text'} className={'logIn__input'} placeholder={'Password'}/>
      <button className={'btn logIn__btn logIn__btn-log'}>LOG IN</button>
      <p className={'logIn__text'}>or</p>
      <button className={'btn logIn__btn logIn__btn-create'}>CREATE ACCOUNT</button>
    </div>
  </section>
 );
}
export default LogInSection;