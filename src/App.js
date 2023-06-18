import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>

    // <div className='bg-gradient-to-l from-purple-900 to-blue-900 bg-no-repeat bg-cover overflow-hidden'>
//     <div className='bg-gradient-to-r from-red-900  via-yellow-900 to-green-900 bg-no-repeat bg-cover overflow-hidden'>
//   <Header />
//   <Banner />
//   <Nav />
//   <About />
//   <Services />
//   <Work />
//   <Contact />
// </div>

  );
};

export default App;
