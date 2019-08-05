import React, { Component } from "react";
import "./studentBox.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectstudent } from "../reducers/target-s-reducer";
import { selectcampus } from "../reducers/target-c-reducer";

class Studentbox extends Component {
  state = {};

  componentWillMount = () => {
    // console.log(this.props.campuses);
  };

  getcam = id => {
    let cams = this.props.campuses;
    // console.log(cams);
    for (let i = 0; i < cams.length; i++) {
      if (cams[i].id == id) return cams[i].name;
    }
    //console.log(cams[i].name)
    return "None";
  };

  log = () => {
    console.log("click");
  };

  select = () => {
    this.props.selectstudent(this.props.student);
    let cams = this.props.campuses;

    for (let i = 0; i < cams.length; i++) {
      if (cams[i].id == this.props.student.campusId) {
        this.props.selectcampus(cams[i]);
        return;
      }
    }
    this.props.selectcampus(null);
    // setTimeout(() => {
    //   console.log(this.props.tarcam);    ???????
    // }, 2000);
  };

  render() {
    return (
      <div className="boxbody">
        <img src={this.props.student.imageUrl} />
        <div className="info" onClick={this.select}>
          <Link to="/studentview">
            {this.props.student.firstName + " " + this.props.student.lastName}
          </Link>
        </div>
        <div className="info">
          <Link to="/">{this.getcam(this.props.student.campusId)} </Link>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses
    // tarcam: state.targetCam
  };
};

const mapAction = {
  selectstudent,
  selectcampus
};

export default connect(
  mapState,
  mapAction
)(Studentbox);
