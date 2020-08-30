import React from "react";

import { withFirebase } from "../Firebase/context";

const LogOutButton = ({firebase})=>(
  <button  onClick={firebase.doSignOut} type={'button'} className={'link'}>
    Log Out
  </button>
)
  export default withFirebase(LogOutButton);