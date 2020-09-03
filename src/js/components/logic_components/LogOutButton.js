import React from "react";

import { withFirebase } from "../Firebase/Context";
import {Link} from "react-router-dom";

const LogOutButton = ({firebase})=>(
  <Link to={'/'} onClick={firebase.doSignOut} type={'button'} className={'link'}>
    Log Out
  </Link>
)
  export default withFirebase(LogOutButton);