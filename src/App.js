import React from 'react';

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import About from './components/About';
import Banner from './components/Banner';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Join from './components/Join';
import Review from './components/Review';
import Workouts from './components/Workouts';

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  })

  return (
    <div className='mx-auto bg-page overflow-hidden relative'>
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Review />
      <Faq />
      <Join />
      <Footer />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
