const initialState = [];

export const fetchstudent = () => dispatch => {
  let data = [
    {
      id: 4,
      firstName: "Jerry",
      lastName: "Jingle",
      email: "jerryjingle@bells.com",
      imageUrl: "http://i.imgur.com/AItCxSs.jpg",
      gpa: null,
      createdAt: "2018-12-06T19:58:21.314Z",
      updatedAt: "2018-12-06T19:58:21.314Z",
      campusId: 3
    },
    {
      id: 6,
      firstName: "Barry",
      lastName: "Huang",
      email: "someemailgoeshere@yahoo.com",
      imageUrl: "http://i.imgur.com/AItCxSs.jpg",
      gpa: null,
      createdAt: "2018-12-06T20:04:04.275Z",
      updatedAt: "2018-12-06T20:04:04.275Z",
      campusId: 1
    },
    {
      id: 1,
      firstName: "justin",
      lastName: "mintzer",
      email: "mintzer.justin@gmail.com",
      imageUrl: "https://i.imgur.com/N9Koe2G.jpg",
      gpa: 4,
      createdAt: "2018-12-05T23:02:45.257Z",
      updatedAt: "2018-12-05T23:02:45.257Z",
      campusId: 1
    },
    {
      id: 24,
      firstName: "first",
      lastName: "LAST",
      email: "email@email.com",
      imageUrl: "http://i.imgur.com/AItCxSs.jpg",
      gpa: null,
      createdAt: "2018-12-10T04:50:33.677Z",
      updatedAt: "2018-12-10T04:50:33.677Z",
      campusId: null
    },
    {
      id: 2,
      firstName: "bob",
      lastName: "jones",
      email: "bobbyboy1234@yahoo.com",
      imageUrl: "https://i.imgur.com/GuAB8OE.jpg",
      gpa: 3.7,
      createdAt: "2018-12-05T23:02:45.270Z",
      updatedAt: "2019-06-14T00:15:35.429Z",
      campusId: 1
    }
  ];
  //   console.log(data);
  dispatch({
    type: "FETCH_STUDENTS",
    payload: data
  });
};

export const changeCampus = (stu, camID) => {
  return {
    type: "CHANGE_CAMPUS",
    payload: {
      stu,
      camID
    }
  };
};

export const deleteStudent = stuu => {
  return {
    type: "DELETE_STU",
    payload: stuu
  };
};
export const addStudent = stu => {
  return {
    type: "ADD_STU",
    payload: stu
  };
};
export const editStudent = (stu, nstu) => {
  return {
    type: "EDIT_STU",
    payload: { stu, nstu }
  };
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCH_STUDENTS":
      return action.payload;
    case "CHANGE_CAMPUS":
      let newstate = state.map(ea => {
        if (ea == action.payload.stu) {
          ea.campusId = action.payload.camID;
          return ea;
        } else return ea; // !!!!!!!!!!!!!!!!!!!!!!!! 不然全没返回
      });
      return newstate;
    case "DELETE_STU":
      let nstate = state.filter(ea => ea !== action.payload);
      return nstate;
    case "ADD_STU":
      state.push(action.payload);
      return state;
    case "EDIT_STU":
      let state5 = state.map(ea => {
        if (ea == action.payload.stu) {
          ea = action.payload.nstu;
          return ea;
        } else return ea; // !!!!!!!!!!!!!!!!!!!!!!!! 不然全没返回
      });
      return state5;
    default:
      return state;
  }
}
