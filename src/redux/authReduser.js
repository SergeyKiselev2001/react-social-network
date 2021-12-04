let initialState = {
  userId: null,
  email: "",
  login: "",
  isFetching: false,
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};

export let setUserData = (userId, email, login) => ({ type: "SET_USER_DATA", data: {userId,email,login} });

export default authReduser;
