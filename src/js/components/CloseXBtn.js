import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CloseXBtn({onClick}) {
 
  
 return (
   <div className={'closeX'} onClick={onClick}>
     <FontAwesomeIcon className={'closeX__icon'} icon="times" />
   </div>
 );
}
export default CloseXBtn;