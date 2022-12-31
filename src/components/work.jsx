import React, { Component } from 'react';
import { pastWork } from '../constants';
import VisitButton from './visitbtn';

class Work extends Component {
  state = {};
  render() {
    return (
      <section id='works' className='w-full mt-[100px]'>
        <div className='flex flex-col justify-center items-center'>
          <h1
            className={`text-[50px] font-patua title-section section-text hide`}
          >
            &lt;Work&gt;
          </h1>

          <p className='mt-[30px] text-[22px] text-paragraph font-poppins font-[600] hide'>
            My previous work
          </p>

          <div className='mt-[30px] grid grid-cols-1 gap-y-[30px] md:grid-cols-2 md:gap-x-[336px]'>
            {pastWork.map((work, index) => (
              <div
                key={work.id}
                className='bg-work rounded-[10px] sm:min-w-[344px] min-w-[275px]  flex flex-col justify-between items-center sm:py-[25px] py-[20.02px] hide'
              >
                <img
                  src={work.img}
                  alt={work.id}
                  className='sm:max-w-[315px] sm:max-h-[156px] max-w-[251.82px] max-h-[124.9px] hide'
                />

                <p className='sm:my-[26px] my-[20.82px] sm:text-[20px] text-[15px] text-work font-poppins font-[600] hide'>
                  {work.text}
                </p>

                <VisitButton link={work.projectlink} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
