import React, {useState, useEffect} from 'react';
import CloseX from "../components/closeX";
import {FirebaseContext} from '../components/Firebase/indexFirebase';
import {Link} from "react-router-dom";
import Firebase from '../components/Firebase/indexFirebase';

function SignUpPage({isSignUpShown, handleSignUpVisible, handleLoginVisible}) {
  
  const [initialState, setState] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  })
  
  const handleOff = () => {
    handleSignUpVisible(false)
    handleLoginVisible(true)
  }
  
  useEffect(() => {
    this.firebase = new Firebase();
  }, {});
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const isInvalid =
    initialState.passwordOne !== initialState.passwordTwo ||
    initialState.passwordOne === '' ||
    initialState.email === '' ||
    initialState.username === '';
  
  const handleSubmit = (event) => {
    event.preventDefault()
    this.firebase
      .doCreateUserWithEmailAndPassword(initialState.email, initialState.passwordOne)
      .then(authUser => {
        setState({...initialState});
      })
      .catch(error => {
          setState({...initialState, error})
        }
      );
  }
  
  return (
    <section className={isSignUpShown ? 'signUp' : 'signUp hidden'}>
      <div className={'board signUp__board'}>
        <CloseX onClick={handleOff}/>
        <h2 className={'signUp__title'}>Sign Up Now!</h2>
        <FirebaseContext.Consumer>
          <form onSubmit={handleSubmit}>
            <input
              name={'username'}
              value={initialState.username}
              type={'text'}
              className={'signUp__input'}
              placeholder={'Username'}
              onChange={handleChange}
            />
            <input
              name={'email'}
              value={initialState.email}
              type={'email'}
              className={'signUp__input'}
              placeholder={'Email'}
              onChange={handleChange}
            />
            <input
              name={'passwordOne'}
              value={initialState.passwordOne}
              type={'password'}
              className={'signUp__input'}
              placeholder={'Password'}
              onChange={handleChange}
            />
            <input
              name={'passwordTwo'}
              value={initialState.passwordTwo}
              type={'password'}
              className={'signUp__input'}
              placeholder={'Confirm Password'}
              onChange={handleChange}
            />
            <button className={'btn signUp__btn'} disabled={isInvalid} type={'submit'}>
              CREATE ACCOUNT
            </button>
            {/*{error && <p>{error.message}</p>}*/}
          </form>
        </FirebaseContext.Consumer>
      </div>
    </section>
  );
}

export default SignUpPage;