import React, { Component } from 'react';
import { Navbar, Skills, Home, Footer } from './components/exporter';

class App extends Component {
  state = {};
  render() {
    return (
      <div className='w-full overflow-hidden'>
        <div className='sm:px-[40px] px-[20px] fixed flex justify-center items-center nav-bar w-full'>
          <div className='w-full lg:max-w-[1024px]'>
            <Navbar />
          </div>
        </div>

        <div className='sm:px-[40px] px-[20px] mt-[150px] sm:mt-[191px] flex justify-center items-start'>
          <div className='w-full lg:max-w-[1024px]'>
            <Home />
            <Skills />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
