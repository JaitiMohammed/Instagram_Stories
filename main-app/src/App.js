import React, { Component } from "react";
import Navbar from "./components/navbar";
import "./App.css";
import Container from "./components/container";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container />
      </>
    );
  }
}
