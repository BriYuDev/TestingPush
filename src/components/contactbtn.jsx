import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactButton extends Component {
  state = {};
  render() {
    return (
      <Link to='/contact'>
        <button
          className={`${this.props.styles} ml-0 items-center font-poppins text-white font-semibold py-[6px] px-[10px] cont-btn rounded-[10px]`}
        >
          Contact Me
        </button>
      </Link>
    );
  }
}

export default ContactButton;
