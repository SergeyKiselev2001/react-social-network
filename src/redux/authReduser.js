let initialState = {
  userId: null,
  email: "",
  login: "",
  isFetching: false,
  authData: {
    email: null,
    id: null,
    login: null
  },
  isAuth: false
};

const authReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        ...action.data,
      };

    case "SET_AUTH_USER_DATA":

  
      return {
        ...state,
        authData : {...action.authData},
        isAuth : true
      };
    default:
      return state;
  }
};

export let setUserData = (userId, email, login) => ({
  type: "SET_USER_DATA",
  data: { userId, email, login },
});

export let setAuthUserData = (obj) => ({
  type: "SET_AUTH_USER_DATA",
  authData: obj,
  isAuth: true
});

export default authReduser;
