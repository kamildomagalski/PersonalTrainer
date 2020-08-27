import React from 'react';

function TakeALookSection() {
  return (
    <section className={'look'}>
      <div className={'container'}>
        <h2 className={'look__title'}>TAKE A LOOK!</h2>
        <div className={'look__wrapper'}>
          <div className={'look__element'}>
            <p className={'look__text'}>sample plan</p>
          </div>
          <div className={'look__element'}>
            <p className={'look__text'}>sample exercise</p>
          </div>
          <div className={'look__element'}>
            <p className={'look__text'}>sample exercise</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TakeALookSection;