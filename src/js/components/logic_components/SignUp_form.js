import React, {useState} from "react";

const SignUpForm = ({firebase, handleOff}) => {
  
  const [initialState, setState] = useState({
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    firebase
      .doCreateUserWithEmailAndPassword(initialState.email, initialState.passwordOne)
      .then(authUser => {
        return firebase
          .user(authUser.user.uid)
          .set({
            username: initialState.username,
            email: initialState.email
          })
      })
      .then(isAuth => {
        setState({
          username: '',
          email: '',
          passwordOne: '',
          passwordTwo: '',
          error: null
        });
        handleOff();
      })
      .catch(error => {
          setState({
            ...initialState,
            username: '',
            email: '',
            passwordOne: '',
            passwordTwo: '',
            error
          })
        }
      )
  }
  
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
  
  return (
    <>
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
        {initialState.error && <p>{initialState.error.message}</p>}
      </form>
    </>
  )
}
export default SignUpForm;