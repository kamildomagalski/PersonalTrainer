import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CloseX({onClick}) {
 
  
 return (
   <div className={'closeX'} onClick={onClick}>
     <FontAwesomeIcon className={'closeX__icon'} icon="times" />
   </div>
 );
}
export default CloseX;