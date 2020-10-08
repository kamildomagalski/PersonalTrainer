import React from 'react';
import UserPlans from "./UserPlans";

function Plans({userData}) {
  return (
    <section className={'plans'}>
      <h2 className={'plans__title'}>Plans</h2>
      <div className={'wrapper'}>
      <UserPlans userData={userData}/>
      </div>
    </section>
  );
}

export default Plans;