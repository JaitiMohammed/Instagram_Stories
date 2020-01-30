import React, { Component } from "react";
import faker from "faker";
import "./cardBox.css";
export default class cardBox extends Component {
  render() {
    return (
      <div className='carousel-item col-md-3  active'>
        <div className='card h-100'>
          <div className='card-body'>
            <div className='myback-img '>
              <img src={faker.image.image()} className='' />
            </div>
            <div className='myoverlay'></div>
            <div className='profile-img'>
              <div className='borders avatar-profile'>
                <img src={faker.image.avatar()} />
              </div>
            </div>
            <div className='profile-title'>
              <a href='#'>
                <h3>@{faker.name.lastName()}</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
