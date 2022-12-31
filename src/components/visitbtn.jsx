import React, { Component } from 'react';

class VisitButton extends Component {
  state = {};
  render() {
    return (
      <a href={this.props.link} target='_blank'>
        <button
          className={`${this.props.styles} ml-0 items-center font-poppins text-white font-semibold py-[6px] sm:w-[123px] w-[98.33px] visit-btn rounded-[10px]`}
        >
          Visit
        </button>
      </a>
    );
  }
}

export default VisitButton;
