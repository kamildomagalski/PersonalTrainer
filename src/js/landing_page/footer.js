import React from 'react';
import Logo from "../components/logo";

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
          {/*ikony!*/}
          </div>
        </div>
      </div>
      <p className={'copyrights'}>Copyrights Kamil Domagalski 2020</p>
    </div>
  </section>
 );
}
export default Footer;