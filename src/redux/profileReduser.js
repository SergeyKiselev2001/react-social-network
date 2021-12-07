
import { authAPI, profileAPI } from '../API/API';

let initialState = {
  profileInfo: {},

  currentUserId: null,

  currentInputData: "",
  postsData: [
    { id: 1, likesCount: 34, msg: "ПРИВЕТ" },
    { id: 2, likesCount: 63, msg: "тестовый пост 2" },
    { id: 3, likesCount: 27, msg: "Yo" },
    { id: 4, likesCount: 12, msg: "пост 4" },
  ],
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE-INPUT":
      return {
        ...state,
        currentInputData: action.inputTxt,
      };

    case "ADD-POST":
      let body = state.currentInputData;
      return {
        ...state,
        currentInputData: "",
        postsData: [...state.postsData, { id: 5, msg: body, likesCount: 0 }],
      };

    case "SET_PROFILE_INFO":
      return {
        ...state,
        profileInfo: action.profileInfo,
      };

    case "SET_CURRENT_USER_ID":
      return {
        ...state,
        currentUserId: action.currentUserId,
      };
    default:
      return state;
  }
};

export let addPostAC = () => ({ type: "ADD-POST" });
export let changeInputAC = (msg) => ({
  type: "CHANGE-INPUT",
  inputTxt: msg,
});

export let setProfileInfo = (obj) => ({
  type: "SET_PROFILE_INFO",
  profileInfo: obj,
});
export let setCurrentUserID = (number) => ({
  type: "SET_CURRENT_USER_ID",
  currentUserId: number,
});

export const profileDidMountThunkCreator = (currentUserId) => (dispatch) => {

    let userID =  currentUserId;

    async function first(){
      if (!userID) {
        await authAPI.authMe()
          .then((res) => {
            userID = res.data.id;
          });
      }


      await profileAPI.getProfileInfo(userID)
        .then((res) => {
        dispatch(setProfileInfo(res.data));
      });
    }

    
    first();
    
};

export default profileReduser;
