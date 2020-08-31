import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./landing_page/landingPage";
import AppMainPulpit from "./application/appMainPulpit";
import { withFirebase } from "./components/Firebase/context";
import { AuthUserContext } from './components/Session/indexSession'

function App({firebase, listener}) {
  
  const [isAuth, setAuth] = useState(null)
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? setAuth({authUser})
          : setAuth({authUser: null});
      }
    );
    // return () => {
    //   listener();
    // }
    
  }, [])
  
  console.log(isAuth + 'App');
  console.log(isAuth ? 'mamy to!' : 'niezarejestrowano');
  return (
    <>
      <AuthUserContext.Provider value={isAuth}>
        <Router>
          <Switch>
            <Route path={'/'} exact render={(props) => <LandingPage {...props}/>}/>
            <Route path={'/app'} component={AppMainPulpit}/>
          </Switch>
        </Router>
      </AuthUserContext.Provider>
    </>
  );
}

export default withFirebase(App);
library.add(faTimes)
