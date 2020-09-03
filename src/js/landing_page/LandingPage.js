import React, {useState} from 'react';

import Header from "./Header";
import DiscoverSection from "./Discover_section";
import FeaturesSection from "./Features_section";
import TakeALookSection from "./TakeALook_section";
import GetStartedSection from "./GetStarted_section";
import Footer from "./Footer";
import LogInPage from "./LogIn_page";
import SignUpPage from "./SignUp_page";



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