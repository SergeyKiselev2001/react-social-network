
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

    case "SET_USER_PHOTO":

      profileAPI.setImage(action.file);
      return state;
    
    default:
      return state;
  }
};


/// ACTION CREATORS

export let addPostAC = (currentMsg) => ({ type: "ADD-POST", currentMsg });
export let deletePostAC = (postId) => ({type: "DELETE_POST", postId});
export let setUserPhoto = (file) => ({type : "SET_USER_PHOTO", file });
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



/// SANKI

export const getStatusTK = (userID) => (dispatch)=> {

  profileAPI.getStatus(userID)
  .then(
    (response)=>{
    
      dispatch(setStatus(response.data))
    }
  )
}

export const updateStatusTK = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(
    (response)=>{
    
      if (response.data.resultCode === 0){
        dispatch(setStatus(status));
      }
    }
  )
}

export const profileDidMountThunkCreator = (currentUserId) => (dispatch) => {
    let userID =  currentUserId;

  

    async function first(){
      if (!userID) {
        console.log("DAAAAAAAAAA");
        await authAPI.authMe()
          .then((res) => {
            userID = res.data.id;
          });
      }
   
      await profileAPI.getProfileInfo(userID)
        .then((res) => {
       
          console.log("NEEEEEEEEEEEEEt");
        dispatch(setProfileInfo(res.data));
        getStatusTK(userID);
      });
    }
    first();
};

export default profileReduser;
