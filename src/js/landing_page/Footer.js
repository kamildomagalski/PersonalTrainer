import React from 'react';
import Logo from "../components/Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer() {
 return (
  <section className={'footer'}>
    <div className={'container'}>
      <div className={'footer__wrapper'}>
        <div className={'footer__logo'}>
          <Logo/>
        </div>
        <div className={'footer__media'}>
          <p className={'footer__text'}>FOLLOW US ON MEDIA!</p>
          <div className={'footer__icons'}>
            <FontAwesomeIcon className={'footer__icon'} icon={["fab", "facebook-square"]} />
            <FontAwesomeIcon className={'footer__icon'} icon={["fab", "youtube-square"]} />
            <FontAwesomeIcon className={'footer__icon'} icon={["fab", "instagram"]} />

          </div>
        </div>
      </div>
      <p className={'copyrights'}>Copyrights Kamil Domagalski 2020</p>
    </div>
  </section>
 );
}
export default Footer;