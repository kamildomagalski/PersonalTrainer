import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {withFirebase} from '../Firebase/context';
import AuthUserContext from "./context";

const withAuthorization = condition => Component => {
  
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        isAuth => {
          if (!condition(isAuth)) {
            this.props.history.push('/')
          }
        }
      )
    }
    
    componentWillUnmount() {
      this.listener();
    }
    
    render() {
      return (
        <AuthUserContext.Consumer>
          {isAuth => condition(isAuth) ? <Component {...this.props}/> : null}
        </AuthUserContext.Consumer>
      )
    }
    
    // let listener;
    //
    // const WithAuthorization= ({props}) =>{
    //   // console.log(props.firebase + 'authorization');
    //   useEffect(() => {
    //     listener=props.firebase.auth.onAuthStateChanged(
    //       isAuth => {
    //         if(!condition(isAuth)){
    //           props.history.push('/')
    //         }
    //       },
    //     )
    //     return () => {
    //       listener();
    //     }
    //   }, [])
    //
    //   return (
    //     <AuthUserContext.Consumer>
    //       {isAuth => condition(isAuth) ? <Component {...props}/> : null}
    //     </AuthUserContext.Consumer>
    //   );
    
  }
  
  return withRouter(withFirebase(WithAuthorization));
}

export default withAuthorization;