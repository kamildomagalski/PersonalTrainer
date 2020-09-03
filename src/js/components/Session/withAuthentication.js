import React from "react";
import {AuthUserContext} from "./indexSession";
import {withFirebase} from "../Firebase/Context";

const withAuthentication = Component => {
  
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuth: null
      }
    }
    
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        isAuth => {
          isAuth
            ? this.setState({isAuth})
            : this.setState({isAuth: null});
        }
      )
    }
    
    componentWillUnmount() {
      this.listener();
    }
    
    render() {
      return (
        <AuthUserContext.Provider value={this.state.isAuth}>
          <Component {...this.props}/>
        </AuthUserContext.Provider>
      )
    }
  }
  
  // let listener;
  // const WithAuthentication = (props) => {
  //
  //   const [isAuth, setAuth] = useState(null)
  //
  //   useEffect(() => {
  //      listener= props.firebase.auth.onAuthStateChanged(isAuth => {
  //         isAuth
  //           ? setAuth({isAuth})
  //           : setAuth({isAuth: null});
  //       }
  //     );
  //     return () => {
  //       listener();
  //     }
  //
  //   }, [])
  //
  //   return (
  //     <AuthUserContext.Provider value={isAuth}>
  //       <Component {...props}/>
  //     </AuthUserContext.Provider>
  //   );
  // }
  return withFirebase(WithAuthentication);
}
export default withAuthentication;