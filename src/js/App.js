import React, {useState} from 'react';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

import Header from "./landing_page/header";
import DiscoverSection from "./landing_page/discover_section";
import FeaturesSection from "./landing_page/features_section";
import TakeALookSection from "./landing_page/takeALook_section";
import GetStartedSection from "./landing_page/getStarted_section";
import Footer from "./landing_page/footer";
import LogInSection from "./landing_page/logIn_section";
import MainPulpit from "./application/mainPulpit";


function App() {
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
      {/*<MainPulpit/>*/}
    </>
  );
}

export default App;
library.add(faTimes)
