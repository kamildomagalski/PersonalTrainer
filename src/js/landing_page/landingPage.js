import React, {useState} from 'react';

import Header from "./header";
import DiscoverSection from "./discover_section";
import FeaturesSection from "./features_section";
import TakeALookSection from "./takeALook_section";
import GetStartedSection from "./getStarted_section";
import Footer from "./footer";
import LogInPage from "./logIn_page";
import SignUpPage from "./signUp_page";



function LandingPage({history, isAuth}) {
  const [isLogInShown, setLoginShown] = useState(false)
  const [isSignUpShown, setSignUpShown] = useState(false)
  
  const handleLoginVisible = (value) => {
    setLoginShown(value)
  }
  const handleSignUpVisible = (value) => {
    setSignUpShown(value);
  }
  // console.log(isAuth + ' landing page');
  return (
    <>
      <Header onLoginClick={handleLoginVisible} />
      <DiscoverSection/>
      <FeaturesSection/>
      <TakeALookSection/>
      <GetStartedSection/>
      <Footer/>
      <LogInPage history={history} isVisible={isLogInShown} onVisibilityChange={handleLoginVisible}
                 handleSignUpVisible={handleSignUpVisible}/>
      <SignUpPage isSignUpShown={isSignUpShown} handleSignUpVisible={handleSignUpVisible}
                  handleLoginVisible={handleLoginVisible}/>
    </>
  );
}

export default LandingPage;