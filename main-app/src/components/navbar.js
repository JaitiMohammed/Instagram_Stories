import React, { Component } from "react";
import "./navbar.css";
export default class navbar extends Component {
  render() {
    return (
      <div className='navbar navfar'>
        <a href='#'>
          <i className='fa fa-instagram bisc'></i>
          <span className='mini'></span>
        </a>
      </div>
    );
  }
}
