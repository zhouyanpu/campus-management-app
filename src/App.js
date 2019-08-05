import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import Headbar from "./components/headBar";
import Students from "./components/allStudents";
import Campuses from "./components/allCampuses";
import Studentview from "./components/studentView";
import AddStudentview from "./components/addStudentView";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>CUNNY</h1>
          <Headbar />
          <Switch>
            <Route path="/allcampuses" component={Campuses} />
            <Route path="/allstudents" component={Students} />
            <Route path="/studentview" component={Studentview} />
            <Route path="/addstudentview" component={AddStudentview} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
