import React, { Component } from 'react';
import { copyright } from '../assets';
import ContactButton from './contactbtn';

class Footer extends Component {
  state = {};
  render() {
    return (
      <section>
        <div className='mt-[76px] flex-col flex justify-center items-center'>
          <p className='mb-[14px] text-[22px] text-paragraph font-poppins font-[600] hide'>
            Want more information ?
          </p>
          <ContactButton styles='ml-0' />
        </div>

        <div className='border-t-[1px] border-[#7000FF] flex justify-start items-center flex-row mt-[78px] w-full lg:max-w-[1024px] sm:py-[12px] py-[6px]'>
          <img
            src={copyright}
            alt='copyright'
            className='w-[16px] h-[16px] object-contain mr-[5px]'
            loading='lazy'
          />

          <p className='text-gradient3 font-poppins font-[600] sm:text-[20px] text-[15px]'>
            2022 BriYu All Rights Reserved.
          </p>
        </div>
      </section>
    );
  }
}

export default Footer;
