import React, {useEffect, useState} from "react";
import {AuthUserContext} from "./indexSession";
import {withFirebase} from "../Firebase/context";

const withAuthentication = Component => {
  
  const WithAuthentication = (props) => {
    const [isAuth, setAuth] = useState(null)
    
    useEffect(() => {
      // listener=
      props.firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? setAuth({authUser})
            : setAuth({authUser: null});
        }
      );
      // return () => {
      //   listener();
      // }
      
    }, [])
    
    return (
      <AuthUserContext.Provider value={isAuth}>
        <Component {...props}/>
      </AuthUserContext.Provider>
    );
  }
  return withFirebase(WithAuthentication);
}

export default withAuthentication;