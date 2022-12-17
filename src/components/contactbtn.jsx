import React, { Component } from 'react';

class ContactButton extends Component {
  state = {};
  render() {
    return (
      <a
        href='https://www.fiverr.com/aesblox/make-front-end-website-using-angular'
        target='_blank'
      >
        <button
          className={`${this.props.styles} ml-0 items-center font-poppins text-white font-semibold py-[6px] px-[10px] cont-btn rounded-[10px]`}
        >
          Contact Me
        </button>
      </a>
    );
  }
}

export default ContactButton;
