import { authAPI, profileAPI } from "../API/API";
import { authMeThunkCreator, setAuthUserData } from "./authReduser";
import { setProfileInfo, setStatus } from "./profileReduser";



let initialState = {
    
    isUserAuthorised : null,
    userId : null,
    userStatus : '',

};
  
const appReduser = (state = initialState, action = {type: "DEFAULT"}) => {


    switch (action.type){
        case "SET_AUTHORISATION_STATUS":

            return {
                ...state,
                isUserAuthorised : action.status
            }
        case "SET_INITIALISATING_USER_ID":
            return {
                ...state,
                userId : action.userId
            }
        case "SET_INITIALISATING_USER_STATUS":
            return {
                ...state,
                userStatus : action.userStatus
            }
        case "DEFAULT":
          
            return {
                ...state,
            }
    
        default:
            return {
                ...state
            }
    }
};

/// ACTION CREATORS

export const setAuthorisationStatusAC = (status) => {

    return {
        type: "SET_AUTHORISATION_STATUS",
        status : status
    }
}
export const setInitialisationUserStatus = (userStatus) => {
    return {
        type: "SET_INITIALISATING_USER_STATUS",
        userStatus : userStatus
    }
}

export const setInitialisatingUserID = (userId) => {
    return {
        type: "SET_INITIALISATING_USER_ID",
        userId : userId
    }
}

/// SELECTORS 

export const userIdSL = state => state.app.userId;
export const userStatusSL = state => state.app.userStatus;

/// SANKI


export const  checkUserAuthorisationTC = () => (dispatch) => {
    
    async function checkUserAuthorisation() {

        let userID = 0;

        await authAPI.authMe().then(
            res=>{
                if (res.resultCode === 0){
                    userID = res.data.id;
                    dispatch(setInitialisatingUserID(res.data.id));
                    dispatch(setAuthUserData(res.data));
                }
    
                if (res.resultCode != 0){
                    dispatch(setAuthorisationStatusAC(false));
                }
            }
        );

        await profileAPI.getProfileInfo(userID).then(
            res => {
                dispatch(setProfileInfo(res.data));
            }
        )

        await profileAPI.getStatus(userID).then(
            res=>{
                let userStatus = res.data;
                dispatch(setStatus(userStatus));
            }
        )

        dispatch(setAuthorisationStatusAC(true));
    }

    checkUserAuthorisation();
    /// authMeThunkCreator(); на будущее...
} 

export default appReduser;

  