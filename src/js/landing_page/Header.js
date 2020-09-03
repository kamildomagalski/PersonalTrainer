import React, {useState} from 'react';
import Logo from '../components/Logo'
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
  const ButtonNoAuth = () => (<a href={'/#'} onClick={()=> {onChange(); toggleMenu()}}>Log in</a>)

  
  return (
    <header className={'header'}>
      <div className={'header__logo'}>
        <Logo/>
      </div>
      <ul className={isActive ? 'header__menu menu-active' : 'header__menu'}>
        <a href={'/#'}>Home</a>
        <a href={'/#'}>Features</a>
        <a href={'/#'}>Take a look</a>
        
          <AuthUserContext.Consumer>
            {isAuth => {
              return isAuth != null ? <ButtonAuth/> : <ButtonNoAuth/>
            }}
          </AuthUserContext.Consumer>
        
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