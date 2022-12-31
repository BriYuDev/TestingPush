import React, { Component } from 'react';
import { logo } from '../assets';
import { navLinks } from '../constants';
import ContactButton from './contactbtn';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Match(props) {
  const resolvedPath = useResolvedPath('/');
  const isMatch = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div>
      <nav className='w-full py-3 flex justify-between items-center nav-bar'>
        <Link to='/'>
          <img
            src={logo}
            alt='logo'
            className='w-[92px] h-[53px]'
            loading='lazy'
          />
        </Link>

        <ul
          className={`${
            isMatch ? 'sm:flex' : 'hidden'
          } list-none hidden justify-end items-center flex-1`}
        >
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

        <div className={`${isMatch ? 'sm:flex' : 'hidden'} hidden`}>
          <ContactButton styles='sm:ml-[19px]' />
        </div>

        <div
          onClick={props.changetoggleevent}
          className={`${props.checktoggleevent === false ? 'close' : 'open'} ${
            isMatch ? '' : 'hidden'
          } cursor-pointer sm:hidden flex flex-col items-end`}
        >
          <div className='line-above w-[33px] h-[3px] nav-mobile' />
          <div className='line-center my-[9px] w-[46px] h-[3px] nav-mobile' />
          <div className='line-below w-[46px] h-[3px] nav-mobile' />
        </div>
        <div
          className={`${
            props.checktoggleevent === false ? 'close-menu' : 'open-menu'
          } ${
            isMatch ? '' : 'hidden'
          } top-[120%] right-5 absolute w-[134px] py-[20px] menu menu-gradient rounded-[10px] sm:hidden flex flex-col justify-center items-center`}
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

        <div className={`${isMatch ? 'hidden' : 'flex'} flex-row`}>
          <Link to='/'>
            <p className='font-poppins font-normal cursor-pointer text-[20px] font-[600] nav-text'>
              Home
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

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
      <Match
        changetoggleevent={() => this.changetoggle()}
        checktoggleevent={this.state.togglemenu}
      />
    );
  }
}

export default Navbar;
