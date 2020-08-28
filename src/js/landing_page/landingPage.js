import React, { useState } from 'react';

import Header from "./header";
import DiscoverSection from "./discover_section";
import FeaturesSection from "./features_section";
import TakeALookSection from "./takeALook_section";
import GetStartedSection from "./getStarted_section";
import Footer from "./footer";
import LogInSection from "./logIn_section";

function LandingPage() {
  const [isLogInShown, setLoginShown] = useState(false)
  
  const handleLoginVisible= (value) =>{
    setLoginShown(value)
  }
 return (
  <>
    <Header onLoginClick={handleLoginVisible}/>
    <DiscoverSection/>
    <FeaturesSection/>
    <TakeALookSection/>
    <GetStartedSection/>
    <Footer/>
    <LogInSection isVisible={isLogInShown} onVisibilityChange={handleLoginVisible}/>
  </>
 );
}
export default LandingPage;