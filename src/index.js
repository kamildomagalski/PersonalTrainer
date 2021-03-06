import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import App from './js/App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from "./js/components/Firebase/IndexFirebase";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App/>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your application to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
