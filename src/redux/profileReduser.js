
import { authAPI, profileAPI } from '../API/API';

let initialState = {
  profileInfo: {},
  status: "",
  currentUserId: null,

  postsData: [
    { id: 1, likesCount: 34, msg: "ПРИВЕТ" },
    { id: 2, likesCount: 63, msg: "тестовый пост 2" },
    { id: 3, likesCount: 27, msg: "Yo" },
    { id: 4, likesCount: 12, msg: "пост 4" },
  ],
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {

    case "ADD-POST":

      return {
        ...state,
        currentInputData: "",
        postsData: [...state.postsData, { id: 5, msg: action.currentMsg, likesCount: 0 }],
      };

    case "DELETE_POST":

    let buffer = state.postsData.filter((el,index)=>index!=action.postId);

    console.log(buffer);

      return {
        ...state,
        postsData: [...buffer],
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

    case "SET_STATUS":
      return {
        ...state,
        status: action.status
      }

    
    case "SAVE_PHOTO_SUCCESS":

    debugger;
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          photos: action.photos
        },
      };
    
    default:
      return state;
  }
};


/// ACTION CREATORS

export let addPostAC = (currentMsg) => ({ type: "ADD-POST", currentMsg });
export let deletePostAC = (postId) => ({type: "DELETE_POST", postId});
export let setProfileInfo = (obj) => ({
  type: "SET_PROFILE_INFO",
  profileInfo: obj,
});
export let setCurrentUserID = (number) => ({
  type: "SET_CURRENT_USER_ID",
  currentUserId: number,
});
export let setStatus = (status) => {
  return {
    type: "SET_STATUS",
    status : status ? status : 'Статус отсутствует'
}}

export const setPhotoSuccess = photos => ({type: "SAVE_PHOTO_SUCCESS", photos});


/// SANKI

export const setPhoto = file => async dispatch => {
    
  const response = await profileAPI.setImage(file);

  debugger;

  if (response.data.resultCode === 0){
    dispatch(setPhotoSuccess(response.data.data.photos));
  }

  debugger;

} 


export const getStatusTK = (userID) => async (dispatch) => {

  const response = await profileAPI.getStatus(userID);
  dispatch(setStatus(response.data))
}

export const updateStatusTK = (status) => async (dispatch) => {

  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) dispatch(setStatus(status));
}

export const profileDidMountThunkCreator = (currentUserId) => async (dispatch) => {

    let userID =  currentUserId;

    if (!userID) {
        const res = await authAPI.authMe();
        userID = res.data.id;
    }
   
    const res2 = await profileAPI.getProfileInfo(userID);
    dispatch(setProfileInfo(res2.data));
    getStatusTK(userID);
};

export default profileReduser;
