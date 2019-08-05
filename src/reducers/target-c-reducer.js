export const selectcampus = cam => {
  // console.log(stu);
  return {
    type: "CAMPUS_SELECTED",
    payload: cam
  };
};

export default function(state = null, { type, payload }) {
  switch (type) {
    case "CAMPUS_SELECTED":
      return payload;
    default:
      return state;
  }
}
