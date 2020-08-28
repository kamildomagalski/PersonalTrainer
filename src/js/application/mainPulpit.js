import React, {useState} from 'react';
import Logo from "../components/logo";


function MainPulpit() {
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
          <li><a href={'/#'}>Calendar</a></li>
          <li><a href={'/#'}>History</a></li>
          <li><a href={'/#'}>Exercises</a></li>
          <li><a href={'/#'}>Plans</a></li>
          <li><a href={'/#'}>Log out</a></li>
        </ul>
        <div onClick={toggleMenu} className={'appHeader__burger'}>
          <div className={'line1'}></div>
          <div className={'line2'}></div>
          <div className={'line3'}></div>
        </div>
      </header>
      <div className={'appPulpit'}>
      
      </div>
    </section>
  );
}

export default MainPulpit;