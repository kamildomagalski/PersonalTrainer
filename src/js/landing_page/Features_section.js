import React from 'react';

function FeaturesSection() {
  return (
    <section className={'features'}>
      <div className={'container'}>
        <h2>FEATURES</h2>
        <div className={'features__wrapper'}>
          <div className={'features__box'}><p>plan preview</p></div>
          <div className={'features__box'}><p>over 100+ excercises</p></div>
          <div className={'features__box'}><p>track your progress</p></div>
          <div className={'features__box'}><p>match own sets</p></div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;