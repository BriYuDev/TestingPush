import React, { Component } from 'react';
import { skillsFrontend, skillsDesign } from '../constants';

class SkillEl extends Component {
  state = {};

  render() {
    return (
      <div className='flex flex-col mt-[30px] justify-center items-start hide'>
        <div className='flex flex-row justify-between items-end sm:w-[300px] w-[240px] md:w-[362px]'>
          <h4 className='text-skill font-poppins font-[500] text-[20px] sm:text-[28px]'>
            {this.props.skill.title}
          </h4>
          <h5 className='mr-[3px] font-poppins font-[500] sm:text-[20px] text-skill2'>
            {this.props.skill.persentase}
          </h5>
        </div>
        <div className='rounded-[20px] md:w-[362px] md:h-[20px] sm:w-[300px] w-[240px] h-[14px] bg-[#878787]'>
          <div
            className={`rounded-[20px] ${this.props.skill.persentasewidth} h-full bg-[#14FF00]`}
          />
        </div>
      </div>
    );
  }
}

class Skills extends Component {
  state = {};
  render() {
    return (
      <section id='skills'>
        <div className='flex flex-col justify-center items-center mt-[100px]'>
          <h1
            className={`text-[50px] font-patua title-section section-text hide`}
          >
            &lt;Skills&gt;
          </h1>
          <p className='mt-[51px] text-[22px] text-paragraph font-poppins font-[600] hide'>
            All of my skills, and I'm always growing
          </p>
        </div>

        <div className='flex justify-start items-center mt-[30px]'>
          <h2 className='left-trans text-gradient2 font-bold font-poppins text-[40px] hide'>
            Frontend
          </h2>
        </div>

        <div className='mt-[30px] flex sm:flex-row flex-col justify-between sm:flex-wrap'>
          {skillsFrontend.map((skill, index) => (
            <SkillEl key={skill.id} index={index} skill={skill} />
          ))}
        </div>

        <div className='flex justify-start sm:justify-end items-center mt-[128px]'>
          <h2 className='design-text text-gradient2 font-bold font-poppins text-[40px] hide'>
            Design
          </h2>
        </div>

        <div className='mt-[30px] flex sm:flex-row flex-col justify-between sm:flex-wrap'>
          {skillsDesign.map((skill, index) => (
            <SkillEl key={skill.id} index={index} skill={skill} />
          ))}
        </div>
      </section>
    );
  }
}

export default Skills;
