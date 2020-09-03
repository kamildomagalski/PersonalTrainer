import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes, faPlus} from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./landing_page/LandingPage";
import AppMainPulpit from "./application/AppMainPulpit";

import {withAuthentication} from './components/Session/indexSession'

function App() {
  
  return (
    <>
        <Router>
          <Switch>
            <Route path={'/'} exact render={(props) => <LandingPage {...props}/>}/>
            <Route path={'/app'} render={(props) => <AppMainPulpit {...props}/>} />
          </Switch>
        </Router>
    </>
  );
}

export default withAuthentication(App);
library.add(faTimes, faPlus)
