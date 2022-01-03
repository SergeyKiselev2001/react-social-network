import { authAPI } from "../API/API";
import { stopSubmit } from 'redux-form';

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
  isAuth: null,
  authStatus: "You are not authorised"
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

    case "SET_AUTH_STATUS":

      if (action.authStatus === "You are succsesfully authorised!"){
        return {
          ...state,
          authStatus : action.authStatus,
          isAuth : true
        }
      }

      return {
        ...state,
        authStatus : action.authStatus
      }

    case "LOGOUT" :

      return {
        userId: null,
        email: "",
        login: "",
        isFetching: false,
        authData: {
          email: null,
          id: null,
          login: null
        },
        isAuth: false,
        authStatus: "You are not authorised"
      }
    
    default:
      return state;
  }
};

/// ACTION CREATORS

export const setAuthStatus = (status) => ({type: "SET_AUTH_STATUS", authStatus: status});

export let setUserData = (userId, email, login) => ({
  type: "SET_USER_DATA",
  data: { userId, email, login },
});

export let setAuthUserData = (obj) => ({
  type: "SET_AUTH_USER_DATA",
  authData: obj,
  isAuth: true
});

export const logoutAC = () => ({type: "LOGOUT"});

/// SANKI

export const authMeThunkCreator = () => async (dispatch) => {
  const res = await authAPI.authMe();
  if (res.resultCode == 0){dispatch(setAuthUserData(res.data))};
}

export const tryToLoginTC = (login, password, rememberMe) => async (dispatch) => {

  dispatch(setAuthStatus("Wait a second..."));
  
  setTimeout(async () => {
    const res = await authAPI.tryToLogin(login, password, rememberMe);
    if (res.resultCode === 0){
      dispatch(setAuthStatus("You are succsesfully authorised! Redirecting..."))
      setTimeout(()=>{dispatch(setAuthStatus("You are succsesfully authorised!"))}, 1500)
    } else {
      let action = stopSubmit('login', {_error: res.messages});
      dispatch(action);
      dispatch(setAuthStatus("Something went wrong, try again!"))
    }}, 1000);
}

export const logoutMeTC = () => async (dispatch) => {
    const res = await authAPI.logoutMe();
    if (res.resultCode === 0) dispatch(logoutAC());
}

export default authReduser;
