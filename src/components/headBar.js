import React, { Component } from "react";
import "./headBar.css";
import { Link } from "react-router-dom";

class Headbar extends Component {
  state = {};
  render() {
    return (
      <div className="barbox">
        <div className="bardy">
          <h4>Key: </h4>
          <button className="btn" onClick={this.props.search}>
            <Link to="/">Home</Link>
          </button>
          <button className="btn" onClick={this.props.search}>
            <Link to="/allcampuses">Our Campuses</Link>
          </button>
          <button className="btn" onClick={this.props.search}>
            <Link to="/allstudents">Our Students</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Headbar;
