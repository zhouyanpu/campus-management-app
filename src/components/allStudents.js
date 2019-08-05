import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchstudent } from "../reducers/stuReducer";
import { selectstudent } from "../reducers/target-s-reducer";
import { selectcampus } from "../reducers/target-c-reducer";
import "./allStudents.css";
import Studentbox from "./studentBox";
import { Link } from "react-router-dom";

class Students extends Component {
  state = {};

  log = async () => {
    await this.props.fetchstudent();
    console.log(this.props.students);
  };

  componentWillMount = async () => {
    // await this.props.selectstudent(null);
    // await this.props.selectcampus(null);
  };

  render() {
    return (
      <div>
        <div className="addbar">
          <h2 onClick={this.log}>All Students</h2>
          <button>
            <Link to="/addstudentview">Add Student</Link>
          </button>
        </div>
        <div className="disbox">
          {/* {this.state.invalid && <h2>Invalid zip</h2>} */}
          {this.props.students.length > 0 &&
            this.props.students.map(student => (
              <Studentbox key={student.id} student={student} />
            ))}
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    students: state.students
  };
};

const mapAction = {
  fetchstudent,
  selectstudent,
  selectcampus
};

export default connect(
  mapState,
  mapAction
)(Students);
