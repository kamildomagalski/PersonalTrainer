import React, {useEffect, useState} from 'react';
import Logo from "../components/Logo";
import {Route, Link} from 'react-router-dom'
import Calendar from "./Calendar";
import History from "./History";
import Plans from "./Plans";
import Exercises from './exercises/Exercises'
import LogOutButton from "../components/logic_components/LogOutButton";
import withAuthorization from '../components/Session/withAuthorization'
import firebase from "firebase";


function AppMainPulpit() {
  const [isActive, setActive] = useState(false)
  const [userData, setUserData ]= useState({
    name: '',
    text: '',
    id:'',
  })
  const userId= firebase.auth().currentUser.uid;
  const rootRef= firebase.database().ref('users/' + userId);

  const nameRef= rootRef.child('username');
  const textRef= rootRef.child('text');
  
  useEffect(()=>{
    nameRef.on('value', snap => {
      setUserData(prevState => ({
        ...prevState,
        name: snap.val(),
      }))
      rootRef.update({userExercises : {}})
    })
    textRef.on('value', snap => {
      setUserData(prevState => ({
        ...prevState,
        id: userId
      }))
    })
    
  },[])
  
  
  
  const toggleMenu = () => {
    setActive(prevState => !prevState)
  }
  
  
  
  return (
    <section className={'appScreen'}>
      <header className={'appHeader'}>
        <div className={'appHeader__logo'}>
          <Logo/>
        </div>
        <ul className={isActive ? 'appHeader__menu appMenu-active' : 'appHeader__menu'}>
          <li className={'appHeader__user'}>
            <div className={'appHeader__avatar'}/>
            <p className={'appHeader__userName'}>{userData.name}</p>
          </li>
          <Link to={'/app/calendar'} onClick={toggleMenu} className={'link'}>Calendar</Link>
          <Link to={'/app/history'} onClick={toggleMenu} className={'link'}>History</Link>
          <Link to={'/app/exercises'} onClick={toggleMenu} className={'link'}>Exercises</Link>
          <Link to={'/app/plans'} onClick={toggleMenu} className={'link'}>Plans</Link>
          <LogOutButton className={'link'}/>
        </ul>
        <div onClick={toggleMenu} className={'appHeader__burger'}>
          <div className={'line1'}/>
          <div className={'line2'}/>
          <div className={'line3'}/>
        </div>
      </header>
      <div className={'appPulpit'}>
        <div className={'board appPulpit__board'}>
          <Route path={'/app/calendar'} component={Calendar}/>
          <Route path={'/app/history'} component={History}/>
          <Route path={'/app/plans'} component={Plans}/>
          <Route path={'/app/exercises'} render={(props) => <Exercises {...props} userData={userData}/>}/>
          
        </div>
      </div>
    </section>
  );
}
const condition = isAuth => !!isAuth;

export default withAuthorization(condition) (AppMainPulpit);