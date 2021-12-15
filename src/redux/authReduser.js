import { authAPI } from "../API/API";

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
  isAuth: false,
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
      debugger;

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
    
    default:
      return state;
  }
};

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


// SANKI

export const authMeThunkCreator = () => (dispatch) => {
  authAPI.authMe().then((res)=>{
    if (res.resultCode == 0){dispatch(setAuthUserData(res.data))}
  })
}

export const tryToLoginTC = (login, password, rememberMe) => (dispatch) => {
  dispatch(setAuthStatus("Wait a second..."));

  setTimeout(()=>{
    authAPI.tryToLogin(login, password, rememberMe).then((res)=>{
      if (res.resultCode === 0){
        dispatch(setAuthStatus("You are succsesfully authorised! Redirecting..."))
        setTimeout(()=>{
          dispatch(setAuthStatus("You are succsesfully authorised!"))
        }, 1500)
      } else {
        dispatch(setAuthStatus("Something went wrong, try again!"))
      }
      debugger;
    })
  },1000);
}



export default authReduser;
