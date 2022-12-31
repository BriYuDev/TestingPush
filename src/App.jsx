import React, { Component } from 'react';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { HomePage, ContactPage } from './pages';

class App extends Component {
  state = {};

  render() {
    return (
      <div className='w-full overflow-hidden'>
        <div className='z-[5] sm:px-[40px] px-[20px] fixed flex justify-center items-center nav-bar w-full'>
          <div className='w-full lg:max-w-[1024px]'>
            <Navbar />
          </div>
        </div>

        <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <script src='https://smtpjs.com/v3/smtp.js'></script>
      </div>
    );
  }
}

export default App;
