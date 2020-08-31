import React, {useState} from 'react';
import Logo from '../components/logo'
import {Link} from "react-router-dom";
import AuthUserContext from "../components/Session/context";

function Header({onLoginClick}) {
  const [isActive, setActive] = useState(false)
  
  const toggleMenu = () => {
    setActive(prevState => !prevState)
  }
  const onChange = () => {
    if (typeof onLoginClick === 'function') {
      onLoginClick(true)
    }
  }
  
  const ButtonAuth = () => (<Link to={'/app'}>Go to the App!</Link>)
  const ButtonNoAuth = () => (<a href={'/#'} onClick={onChange}>Log in</a>)
  
  return (
    <header className={'header'}>
      <div className={'header__logo'}>
        <Logo/>
      </div>
      <ul className={isActive ? 'header__menu menu-active' : 'header__menu'}>
        <li><a href={'/#'}>Home</a></li>
        <li><a href={'/#'}>Features</a></li>
        <li><a href={'/#'}>Take a look</a></li>
        <li>
          <AuthUserContext.Consumer>
            {isAuth => {
              return isAuth != null ? <ButtonAuth/> : <ButtonNoAuth/>
            }}
          </AuthUserContext.Consumer>
        </li>
      </ul>
      <div onClick={toggleMenu} className={'header__burger'}>
        <div className={'line1'}></div>
        <div className={'line2'}></div>
        <div className={'line3'}></div>
      </div>
    </header>
  );
}

export default Header;