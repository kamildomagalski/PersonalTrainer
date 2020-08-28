import React, {useState} from 'react';
import Logo from "../components/logo";
import {Route, Link} from 'react-router-dom'
import Calendar from "./calendar";
import Plans from "./plans";


function AppMainPulpit() {
  const [isActive, setActive] = useState(false)
  
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
              <p className={'appHeader__userName'}>Username</p>
            </li>
            <Link  to={'/app/calendar'} onClick={toggleMenu} className={'link'}>Calendar</Link>
            <Link onClick={toggleMenu} className={'link'}>History</Link>
            <Link onClick={toggleMenu} className={'link'}>Exercises</Link>
            <Link to={'/app/plans'} onClick={toggleMenu} className={'link'}>Plans</Link>
            <Link onClick={toggleMenu} className={'link'}>Log out</Link>
          </ul>
          <div onClick={toggleMenu} className={'appHeader__burger'}>
            <div className={'line1'}/>
            <div className={'line2'}/>
            <div className={'line3'}/>
          </div>
        </header>
        <div className={'appPulpit'}>
          <Route path={'/app/calendar'} component={Calendar}/>
          <Route path={'/app/plans'} component={Plans}/>
        </div>
      </section>
  );
}

export default AppMainPulpit;