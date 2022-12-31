import React, { Component } from 'react';
import { Skills, Home, Footer, Work } from '../components';

class HomePage extends Component {
  state = {};

  componentDidMount() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('title-section')) {
            entry.target.classList.add('show-title-section');
          } else if (entry.target.classList.contains('text-introduce')) {
            entry.target.classList.add('show-text-introduce');
          } else if (entry.target.classList.contains('design-text')) {
            entry.target.classList.add('show-design-text');
          } else if (entry.target.classList.contains('left-trans')) {
            entry.target.classList.add('show-left-trans');
          } else {
            entry.target.classList.add('show');
          }
        }
      });
    });

    const hideelement = document.querySelectorAll('.hide');
    hideelement.forEach((el) => observer.observe(el));
  }

  render() {
    return (
      <div className='sm:px-[40px] px-[20px] mt-[130px] sm:mt-[150px] flex justify-center items-start'>
        <div className='w-full lg:max-w-[1024px]'>
          <Home />
          <Skills />
          <Work />
          <Footer />
        </div>
      </div>
    );
  }
}

export default HomePage;
