import React, { Component } from "react";
import "./cardControl.css";

export default class cardcontrol extends Component {
  render() {
    return (
      <>
        <a
          className='carousel-control-prev'
          href='#carouselExample'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next text-faded'
          href='#carouselExample'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </>
    );
  }
}
