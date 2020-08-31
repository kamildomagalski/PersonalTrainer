import React from 'react';

function Calendar() {
 return (
  <section className={'calendar'}>
   <h2 className={'calendar__title'}>Calendar</h2>
    <div className={'month-picker'}>
      <p className={'month'}>JAN</p>
      <p className={'month'}>FEB</p>
      <p className={'month'}>MAR</p>
      <p className={'month'}>APR</p>
      <p className={'month'}>MAY</p>
      <p className={'month'}>JUN</p>
      <p className={'month'}>JUL</p>
      <p className={'month'}>AUG</p>
      <p className={'month'}>SEP</p>
      <p className={'month'}>OCT</p>
      <p className={'month'}>NOV</p>
      <p className={'month'}>DEC</p>
    </div>
  </section>
 );
}
export default Calendar;