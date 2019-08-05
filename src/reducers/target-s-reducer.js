// export 一定要跟 const ???????????????????
export const selectstudent = stu => {
  // console.log(stu);
  return {
    type: "STUDENT_SELECTED",
    payload: stu
  };
};

export default function(state = null, { type, payload }) {
  switch (type) {
    case "STUDENT_SELECTED":
      return payload;
    default:
      return state;
  }
}
