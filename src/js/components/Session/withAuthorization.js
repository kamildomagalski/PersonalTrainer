import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase/context';
import AuthUserContext from "./context";

const withAuthorization= condition => Component => {
  
  const WithAuthorization= (props) =>{
    useEffect(() => {
      // listener=
      props.firebase.auth.onAuthStateChanged(
        isAuth => {
          if(!condition(isAuth)){
            props.history.push('/')
          }
        },
      )
      // return () => {
      //   listener();
      // }
    }, [])
    
    return (
      <AuthUserContext.Consumer>
        {isAuth => condition(isAuth) ? <Component {...props}/> : null}
      </AuthUserContext.Consumer>
    );
  }
  return withRouter(withFirebase(WithAuthorization));
}

export default withAuthorization;