import React, { Component } from "react";
import { fetchcampus } from "../reducers/camReducer";
import { connect } from "react-redux";

class Campuses extends Component {
  state = {};

  log = async () => {
    await this.props.fetchcampus(); // ?????????为什么括号
    console.log(this.props.campuses);
  };

  render() {
    return <div onClick={this.log}>all campuses</div>;
  }
}

//外面要const 里面就不要
const mapState = state => {
  return {
    campuses: state.campuses
  };
};

const mapAction = {
  fetchcampus
};

export default connect(
  mapState,
  mapAction
)(Campuses);
