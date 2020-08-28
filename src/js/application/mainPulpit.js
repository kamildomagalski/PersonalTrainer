import React, {useState} from 'react';
import Logo from "../components/logo";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Calendar from "./calendar";
import Plans from "./plans";


function MainPulpit() {
  const [isActive, setActive] = useState(false)
  
  const toggleMenu = () => {
    setActive(prevState => !prevState)
  }
  
  return (
    <Router>
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
            <Link to={'/calendar'}><li>Calendar</li></Link>
            <Link><li>History</li></Link>
            <Link><li>Exercises</li></Link>
            <Link to={'/plans'}><li>Plans</li></Link>
            <Link><li>Log out</li></Link>
          </ul>
          <div onClick={toggleMenu} className={'appHeader__burger'}>
            <div className={'line1'}/>
            <div className={'line2'}/>
            <div className={'line3'}/>
          </div>
        </header>
        <div className={'appPulpit'}>
          <Route path={'/calendar'} component={Calendar}/>
          <Route path={'/plans'} component={Plans}/>
        </div>
      </section>
    </Router>
  );
}

export default MainPulpit;