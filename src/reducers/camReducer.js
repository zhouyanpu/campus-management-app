const initialState = [];

export const fetchcampus = () => dispatch => {
  let data = [
    {
      id: 1,
      name: "Hunter College",
      imageUrl: "",
      address: "hunter address",
      description: "description"
    },
    {
      id: 2,
      name: "Queens College",
      imageUrl: "",
      address: "queens address",
      description: "description"
    },
    {
      id: 3,
      name: "Baruch College",
      imageUrl:
        "https://www.baruch.cuny.edu/about/images/heartofmanhattan4.jpg",
      address: "55 Lexington Ave. at 24th St",
      description:
        "Baruch College is ranked among the region's and nation's top colleges by U.S. News & World Report, Forbes, Princeton Review, and others. Our campus is within easy reach of Wall Street, Midtown, and the global headquarters of major companies and non-profit and cultural organizations, giving students unparalleled internship, career, and networking opportunities. The College's more than 18,000 students, who speak more than 110 languages and trace their heritage to more than 160 countries, have been repeatedly named one of the most ethnically diverse student bodies in the United States."
    }
  ];
  //   console.log(data);
  dispatch({
    type: "FETCH_CAMPUSES",
    payload: data
  });
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case "FETCH_CAMPUSES":
      return payload;
    default:
      return state;
  }
}
