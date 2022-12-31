import React, { Component } from 'react';
import { programinglang } from '../assets';

class Home extends Component {
  state = {};

  componentDidMount() {
    const hitext = document.getElementById('hi-text');
    const webdevtext = document.getElementById('webdev');

    const hitextarray = ['Hola', 'Hi'];
    const webdevtextarray = [
      'Design Website',
      'Build Website',
      'Web Developing',
    ];

    let indexwebdev = 0;

    let index = 0;
    let indexsebelum = 0;

    setInterval(() => {
      hitext.classList.remove(hitextarray[indexsebelum]);
      hitext.classList.add(hitextarray[index]);
      hitext.innerText = hitextarray[index];
      indexsebelum = index;
      if (index < 1) {
        index++;
      } else {
        index = 0;
      }
    }, 2500);

    setInterval(() => {
      webdevtext.classList.remove('show-webdev');
      webdevtext.classList.add('hide-webdev');
      setTimeout(() => {
        webdevtext.innerText = webdevtextarray[indexwebdev];
        if (indexwebdev < 2) {
          indexwebdev++;
        } else {
          indexwebdev = 0;
        }
        webdevtext.classList.remove('hide-webdev');
        webdevtext.classList.add('show-webdev');
      }, 600);
    }, 4000);
  }

  render() {
    return (
      <section id='home'>
        <div className='flex justify-center items-center'>
          <h1
            className={`relative text-[50px] font-patua section-text title-section hide`}
          >
            &lt;
            <span id='hi-text' className=''>
              Hi
            </span>
            &gt;
          </h1>
        </div>

        <div className='mt-[72px] flex md:justify-between md:flex-row md:items-center flex-col'>
          <div className='flex justify-start flex-col'>
            <h3 className='order1 relative text-h font-poppins text-[20px] font-bold text-introduce hide'>
              I Like{' '}
              <span id='webdev' className='inline-block text-gradient1'>
                Web Developing
              </span>
            </h3>
            <h1 className='order2 relative text-h font-poppins text-[50px] text-introduce font-bold hide'>
              I'm <span className='inline-block text-gradient1'>BriYu</span>
            </h1>
            <p className='order3 relative font-[500] text-[20px] font-poppins text-introduce text-paragraph max-w-[404px] hide'>
              I am a Frontend Web Developer, always curious about web
              development, and always eager to learn new things.
            </p>
          </div>
          <div>
            <img
              src={programinglang}
              alt='programlang'
              className='hide'
              loading='lazy'
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
