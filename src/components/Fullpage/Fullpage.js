import React, { Component } from "react";

class Fullpage extends Component {
  componentDidMount() {
    window.onload = () => {
      window.$("#fullpage").fullpage({
        controlArrows: false,
        slidesNavigation: true,
        loopHorizontal: false,
        afterLoad: () => document.getElementById("blanket").classList.add("hide")
      });
    };
  }

  render() {
    return <div id="fullpage">{this.props.children}</div>;
  }
}

export default Fullpage;
