import React, {useState} from "react";


export default function LogInForm ({firebase, handleOff, history}) {
  
  const [logState, setLogState] = useState({
    email: '',
    passwordOne: '',
    error: null
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    firebase
      .doSignInWithEmailAndPassword(logState.email, logState.password)
      .then(() => {
        setLogState({
          // ...logState,
          email: '',
          password: '',
          error: null
        })
        handleOff();
        history.push('/app')
      })
      .catch(error => {
        setLogState({
          ...logState,
          email: '',
          password: '',
          error
        })
      })
  }
  
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    setLogState(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  const isInvalid = logState.email === '' || logState.password === '';
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name={'email'}
          value={logState.email}
          type={'email'}
          className={'logIn__input'}
          placeholder={'Username'}
          onChange={handleChange}
        />
        <input
          name={'password'}
          value={logState.password}
          type={'password'}
          className={'logIn__input'}
          placeholder={'Password'}
          onChange={handleChange}
        />
        <button className={'btn logIn__btn logIn__btn-log'} disabled={isInvalid} type={'submit'}>
          LOG IN
        </button>
        {logState.error && <p>{logState.error.message}</p>}
      </form>
    </>
  )
}