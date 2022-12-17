import React, { Component } from 'react';
import { logo } from '../assets/exporter';
import { navLinks } from '../constants';
import ContactButton from './contactbtn';

class Navbar extends Component {
  state = {
    togglemenu: false,
  };

  changetoggle = () => {
    let togglemenu = this.state.togglemenu;
    togglemenu = !togglemenu;

    this.setState({ togglemenu });
  };

  render() {
    return (
      <div>
        <nav className='w-full py-3 flex justify-between items-center nav-bar'>
          <img
            src={logo}
            alt='logo'
            className='w-[92px] h-[53px]'
            loading='lazy'
          />

          <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[20px] font-[600] nav-text ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mr-[19px]'
                }`}
              >
                <a href={nav.id}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className='sm:flex hidden'>
            <ContactButton styles='sm:ml-[19px]' />
          </div>

          <div
            onClick={this.changetoggle}
            className={`${
              this.state.togglemenu === false ? 'close' : 'open'
            } cursor-pointer sm:hidden flex flex-col items-end`}
          >
            <div className='line-above w-[33px] h-[3px] nav-mobile' />
            <div className='line-center my-[9px] w-[46px] h-[3px] nav-mobile' />
            <div className='line-below w-[46px] h-[3px] nav-mobile' />
          </div>
          <div
            className={`${
              this.state.togglemenu === false ? 'close-menu' : 'open-menu'
            } top-[120%] right-5 absolute w-[134px] h-[146px] menu menu-gradient rounded-[10px] sm:hidden flex flex-col justify-center items-center`}
          >
            <ul className='list-none flex flex-col justify-center items-center'>
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`${
                    index !== navLinks.length - 1 ? 'my-0' : 'my-[5px]'
                  } font-poppins font-normal cursor-pointer text-[20px] font-[600] nav-text`}
                >
                  <a href={nav.id}>{nav.title}</a>
                </li>
              ))}
            </ul>
            <ContactButton styles='' />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
