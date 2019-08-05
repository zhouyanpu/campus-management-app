import React, { Component } from "react";
import { connect } from "react-redux";
import "./studentView.css";
import Campusbox from "./campusBox";
import { changeCampus, deleteStudent } from "../reducers/stuReducer";
import { selectcampus } from "../reducers/target-c-reducer";
import { selectstudent } from "../reducers/target-s-reducer";
import { addStudent } from "../reducers/stuReducer";
import { editStudent } from "../reducers/stuReducer";
import { Link } from "react-router-dom";
// import { delStudent } from "../reducers/stuReducer";
import { async } from "q";

class AddStudentview extends Component {
  state = {
    select: null,
    edit: true,
    first: "",
    last: "",
    gpa: NaN,
    url: "None",
    student: this.props.student,
    imgurl: "https://picsum.photos/200/200",
    deleted: false,
    empty: true
  };

  componentWillMount = async () => {
    await this.props.selectstudent(null);
    await this.props.selectcampus(null);
    // console.log(this.props.student);
    // console.log(this.props.campus);
  };

  componentDidMount = () => {
    this.setState({
      select: 111
    });
  };

  condition = () => {
    if (this.props.campus != null)
      //&{} 在这没用？？？？？？
      return `This Student is registered to ` + this.props.campus.name;
    else return "This Student is not registered to a campus";
  };

  setCampus = () => {
    if (typeof this.state.select === "object" && !this.state.deleted) {
      console.log(this.state.select);
      this.props.changeCampus(this.props.student, this.state.select.id);
      this.props.selectcampus(this.state.select);
    }
  };

  condition2 = () => {
    if (this.props.campus != null)
      //&{} 在这没用？？？？？？
      return (
        <button onClick={this.setCampus} className="btn btn2">
          Change Campus
        </button>
      );
    else
      return (
        <button className="btn btn2" onClick={this.register}>
          Register
        </button>
      );
  };

  dropChange = async ev => {
    // console.log(ev.target.value);
    let my = this.props.allcams.filter(ea => ea.name === ev.target.value);
    await this.setState({ select: my[0] });
    // console.log(this.state.select);
  };

  register = async () => {
    // if (this.state.student !== null)
    let gpa = parseFloat(this.state.gpa);
    if (this.state.first === "" || this.state.last === "") {
      alert("Student name CAN NOT be blank");
    } else if (isNaN(gpa) || gpa < 0 || gpa > 4) {
      alert("Please enter a valid GPA between 0 and 4.0");
    } else if (typeof this.state.select === "object") {
      //   console.log(parseFloat(this.state.gpa));
      console.log(this.state.student);
      //this.state.student =

      console.log(this.state.select);
      if (this.state.url === "None")
        this.state.url = "https://picsum.photos/100/100";
      let nstu = {
        firstName: this.state.first,
        lastName: this.state.last,
        gpa: this.state.gpa,
        imageUrl: this.state.url,
        campusId: this.state.select.id
      };
      await this.props.addStudent(nstu);
      await this.props.selectstudent(nstu);
      await this.props.selectcampus(this.state.select);
      setTimeout(() => {
        this.setState({
          edit: !this.state.edit, //这里复位了！
          empty: !this.state.empty,
          first: "",
          last: "",
          gpa: NaN,
          url: "None"
        });
      }, 110);
    } else {
      alert("Please select a Campus");
    }

    // console.log(this.props.student);
  };

  saveEdit = async () => {
    // console.log(this.props.student);
    let gpa = parseFloat(this.state.gpa);
    if (this.state.first === "" || this.state.last === "") {
      alert("Student name CAN NOT be blank");
    } else if (isNaN(gpa) || gpa < 0 || gpa > 4) {
      alert("Please enter a valid GPA between 0 and 4.0");
    } else {
      //   console.log(parseFloat(this.state.gpa));
      console.log(this.state.student);
      if (this.state.url === "None" || this.state.url === "")
        this.state.url = "https://picsum.photos/100/100";
      let newstu = {
        firstName: this.state.first,
        lastName: this.state.last,
        gpa: this.state.gpa,
        imageUrl: this.state.url,
        campusId: this.props.student.campusId
        // campusId: this.state.select.id
      };
      await this.props.editStudent(this.props.student, newstu);
      await this.props.selectstudent(newstu);
      //   await this.setState({ student: newstu });

      //   this.props.selectstudent(this.state.student);
      //   console.log(this.state.student);
      //   //这里发送

      setTimeout(() => {
        this.setState({
          edit: !this.state.edit,
          first: "",
          last: "",
          gpa: NaN,
          url: "None"
        });
      }, 110);
    }
  };

  editChange = async ev => {
    //为什么只能中括号？？？？？？？？
    await this.setState({ [ev.target.name]: ev.target.value });
  };

  cancelBtn = () => {
    if (!this.state.empty)
      return (
        <button className="btn stubtn" onClick={this.click1}>
          Cancel
        </button>
      );
  };

  delete = async () => {
    this.state.imgurl = this.props.student.imageUrl;
    this.state.deleted = true;
    await this.props.deleteStudent(this.props.student);
    await this.props.selectstudent(null);
    await this.props.selectcampus(null);
  };

  onedit = () => {
    if (this.state.edit === false) {
      return (
        <div>
          <h2>
            {this.props.student.firstName + " " + this.props.student.lastName}
          </h2>
          <h3>{"GPA:" + " " + this.props.student.gpa}</h3>

          <button className="btn stubtn" onClick={this.click1}>
            Edit
          </button>
          <button onClick={this.delete} className="btn stubtn">
            Delete
          </button>
        </div>
      );
    } else
      return (
        <div className="editstu">
          <div className="kkk">
            <label>First: </label>
            <input
              onChange={this.editChange}
              name="first"
              className="nameIn"
              type="text"
            />
            <label> Last: </label>
            <input
              onChange={this.editChange}
              name="last"
              className="nameIn"
              type="text"
            />
          </div>
          <div className="kkk">
            <label>GPA: </label>
            <input onChange={this.editChange} name="gpa" type="text" />
          </div>
          <div className="kkk">
            <label>Student URL: </label>
            <input onChange={this.editChange} name="url" type="text" />
          </div>

          <div className="cancelbtn">
            {!this.state.empty && (
              <button className="btn btn3" onClick={this.saveEdit}>
                Save Changes
              </button>
            )}
            {this.cancelBtn()}
          </div>
        </div>
      );
  };

  click1 = () => {
    setTimeout(() => {
      this.setState({ edit: !this.state.edit });
    }, 90);
  };

  condition3 = () => {
    if (this.props.student !== null) {
      return (
        <div className="stuInfo">
          <img className="xl" src={this.props.student.imageUrl} />
          {this.onedit()}
        </div>
      );
    } else if (this.state.deleted) {
      return (
        <div className="stuInfo">
          <img className="xl" src={this.state.imgurl} />
          <div>
            <h2>This Student</h2>
            <h3>Is deleted</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div className="stuInfo">
          <img className="xl" src={this.state.imgurl} />

          {this.onedit()}
        </div>
      );
    }
  };

  cancelbtn2 = () => {
    if (this.state.empty)
      return (
        <button className="btn btn7">
          <Link to="/allstudents">Cancel</Link>
        </button>
      );
  };

  render() {
    return (
      <div>
        {this.condition3()}
        <h3>{this.condition()}</h3>
        {/* <h3>{this.props.campus.name}</h3> */}
        <div className="change">
          {this.props.campus != null && (
            <Campusbox campus={this.props.campus} />
          )}
          <div>
            <select onChange={this.dropChange}>
              <option value="0">Select a Campus</option>
              {this.props.allcams.map(cam => {
                if (cam != this.props.campus)
                  return (
                    <option obj={cam} value={cam.name}>
                      {cam.name}
                    </option>
                  );
              })}
            </select>
            {this.condition2()}
            {this.cancelbtn2()}
          </div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    student: state.targetStu,
    campus: state.targetCam,
    allcams: state.campuses
  };
};

const mapAction = {
  deleteStudent,
  changeCampus,
  selectcampus,
  selectstudent,
  addStudent,
  editStudent
};

export default connect(
  mapState,
  mapAction
)(AddStudentview);
