import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./landing_page/landingPage";
import AppMainPulpit from "./application/appMainPulpit";

import { withAuthentication } from './components/Session/indexSession'


function App({isAuth, props}) {
  

  return (
    <>
        <Router>
          <Switch>
            <Route path={'/'} exact render={(props) => <LandingPage {...props}/>}/>
            <Route path={'/app'} render={ (props) => <AppMainPulpit {...props}/>} />
          </Switch>
        </Router>
    </>
  );
}

export default withAuthentication(App);
library.add(faTimes)
