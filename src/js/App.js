import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import LandingPage from "./landing_page/landingPage";
import AppMainPulpit from "./application/appMainPulpit";


function App() {
  
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/'} exact component={LandingPage}/>
          <Route path={'/app'} component={AppMainPulpit}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
library.add(faTimes)
