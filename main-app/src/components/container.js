import React, { Component } from "react";
import CardCarousel from "./cardBox/cardBox";
import Cardcontrol from "./cardControl/cardcontrol";
export default class container extends Component {
  render() {
    return (
      <div class='container page-top'>
        <div class='container'>
          <div
            id='carouselExample'
            class='carousel slide'
            data-ride='carousel'
            data-interval='9000'
          >
            <div class='carousel-inner row w-100 mx-auto' role='listbox'>
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
              <CardCarousel />
            </div>
          </div>
          <Cardcontrol />
        </div>
      </div>
    );
  }
}
