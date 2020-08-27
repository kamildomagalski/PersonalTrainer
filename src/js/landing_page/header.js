import React, {useState} from 'react';
import Logo from '../components/logo'

function Header() {
 const [isActive, setActive]= useState(false)
 
 const toggleMenu=()=>{
   console.log(isActive);
   setActive(prevState => !prevState)
 }
  
  return (
    <header className={'header'}>
      <div className={'header__logo'}>
        <Logo/>
      </div>
      <ul className={isActive? 'header__menu menu-active': 'header__menu'}>
        <li><a href={'/#'}>Home</a></li>
        <li><a href={'/#'}>Features</a></li>
        <li><a href={'/#'}>Take a look</a></li>
        <li><a href={'/#'}>Log in</a></li>
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