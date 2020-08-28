import React from 'react';
import CloseX from "../components/closeX";
import {Link} from "react-router-dom";

function SignUpPage({isSignUpShown, handleSignUpVisible, handleLoginVisible}) {
  
  const handleOff = () => {
    handleSignUpVisible(false)
    handleLoginVisible(true)
  }
  
  return (
    <section className={isSignUpShown ? 'signUp' : 'signUp hidden'}>
      <div className={'board signUp__board'}>
        <CloseX onClick={handleOff}/>
        <h2 className={'signUp__title'}>Sign Up Now!</h2>
        <form>
          <input
            type={'text'}
            className={'signUp__input'}
            placeholder={'Username'}
          />
          <input
            type={'email'}
            className={'signUp__input'}
            placeholder={'Email'}
          />
          <input
            type={'password'}
            className={'signUp__input'}
            placeholder={'Password'}
          />
          <input
            type={'password'}
            className={'signUp__input'}
            placeholder={'Repeat Password'}
          />
          <button className={'btn signUp__btn'}>CREATE ACCOUNT</button>
        
        </form>
      </div>
    </section>
  );
}

export default SignUpPage;