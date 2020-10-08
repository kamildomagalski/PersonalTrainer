import React from 'react';
import UserPlans from "./UserPlans";

function Plans() {
  return (
    <section className={'plans'}>
      <h2 className={'plans__title'}>Plans</h2>
      <div className={'wrapper'}>
      <UserPlans/>
      </div>
    </section>
  );
}

export default Plans;