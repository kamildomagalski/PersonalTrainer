import React from 'react';

function FeaturesSection() {
  return (
    <section className={'features'} id={'features'}>
      <div className={'container'}>
        <h2 className={'features__title'}>FEATURES</h2>
        <div className={'features__wrapper'}>
          <div className={'features__box features__box-1'}><p className={'features__subtitle'}>plan preview</p></div>
          <div className={'features__box features__box-2'}><p className={'features__subtitle'}>over 100+ excercises</p></div>
          <div className={'features__box features__box-3'}><p className={'features__subtitle'}>track your progress</p></div>
          <div className={'features__box features__box-4'}><p className={'features__subtitle'}>match own sets</p></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;