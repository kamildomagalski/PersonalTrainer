import React from 'react';
import CloseXBtn from "../components/CloseXBtn";
import {FirebaseContext} from '../components/Firebase/IndexFirebase';
import SignUpForm from "../components/logic_components/SignUp_form";

function SignUpPage({isSignUpShown, handleSignUpVisible, handleLoginVisible}) {
  
  const handleOff = () => {
    handleSignUpVisible(false)
    handleLoginVisible(true)
  }
  
  return (
    <section className={isSignUpShown ? 'signUp' : 'signUp hidden'}>
      <div className={'board signUp__board'}>
        <CloseXBtn onClick={handleOff}/>
        <h2 className={'signUp__title'}>Sign Up Now!</h2>
        <FirebaseContext.Consumer>
          {firebase => <SignUpForm firebase={firebase} handleOff={handleOff}/>}
        </FirebaseContext.Consumer>
      </div>
    </section>
  )
}

export default SignUpPage;