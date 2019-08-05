import React, { Component } from "react";
import "./studentBox.css";
import "./campusBox.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectstudent } from "../reducers/target-s-reducer";
import { selectcampus } from "../reducers/target-c-reducer";

class Campusbox extends Component {
  state = {};

  componentWillMount = () => {
    // console.log(this.props.campuses);
  };

  //   getcam = id => {
  //     let cams = this.props.campuses;
  //     // console.log(cams);
  //     for (let i = 0; i < cams.length; i++) {
  //       if (cams[i].id == id) return cams[i].name;
  //     }
  //     //console.log(cams[i].name)
  //     return "None";
  //   };

  getstus = id => {
    // console.log(this.props.campus, "from box");
    let count = 0;
    this.props.students.forEach(st => {
      if (st.campusId == id) count++;
    });
    return count + " students";
  };

  //   log = () => {
  //     console.log("click");
  //   };

  //   select = () => {
  //     this.props.selectstudent(this.props.student);
  //     let cams = this.props.campuses;

  //     for (let i = 0; i < cams.length; i++) {
  //       if (cams[i].id == this.props.student.campusId) {
  //         this.props.selectcampus(cams[i]);
  //         return;
  //       }
  //     }
  //     this.props.selectcampus(null);
  //     // setTimeout(() => {
  //     //   console.log(this.props.tarcam);    ???????
  //     // }, 2000);
  //   };

  render() {
    return (
      <div className="cambox">
        <img className="campic" src={this.props.campus.imageUrl} />
        <div>
          <div className="info" onClick={this.select}>
            <Link to="/campusview">{this.props.campus.name}</Link>
          </div>
          <div className="info">{this.getstus(this.props.campus.id)}</div>
          <button className="btn cambtn">
            <Link to="/">Edit</Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    students: state.students
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
)(Campusbox);
