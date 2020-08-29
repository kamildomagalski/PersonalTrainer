import app from 'firebase/app'
import 'firebase/auth'



const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_RdatabaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   apiKey: 'AIzaSyA8J896gSbmlfDPWZcvNbRttBr3BI25yLc',
//   authDomain: 'personaltrainer-9aa80.firebaseapp.com',
//   databaseURL: 'https://personaltrainer-9aa80.firebaseio.com',
// projectId: 'personaltrainer-9aa80',
// storageBucket :'personaltrainer-9aa80.appspot.com',
// messagingSenderId :'682054874701',
// appId : '1:682054874701:web:16c71b7de41c4e8d390e04',
// measurementId : 'G-JY4H2KY8ZN',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    
    this.auth = app.auth();
  }
  
  //***Auth API***
  
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();
  
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
  doPasswordUpdate = password => this.auth.updatePassword(password)
}

export {Firebase};