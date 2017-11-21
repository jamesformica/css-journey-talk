import React, { Component } from "react";

class Fullpage extends Component {
  componentDidMount() {
    window.onload = () => {
      window.$("#fullpage").fullpage({
        controlArrows: false,
        slidesNavigation: true
      });
    };
  }

  render() {
    return <div id="fullpage">{this.props.children}</div>;
  }
}

export default Fullpage;
