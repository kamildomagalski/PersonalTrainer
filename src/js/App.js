import React from 'react';
import Header from "./landing_page/header";
import DiscoverSection from "./landing_page/discover_section";
import FeaturesSection from "./landing_page/features_section";
import TakeALookSection from "./landing_page/takeALook_section";
import GetStartedSection from "./landing_page/getStarted_section";
import Footer from "./landing_page/footer";
import LogInSection from "./landing_page/logIn_section";



function App() {

  
  return (
    <>
    <Header/>
    <DiscoverSection/>
    <FeaturesSection/>
    <TakeALookSection/>
    <GetStartedSection/>
    <Footer/>
    <LogInSection/>
    </>
  );
}

export default App;
