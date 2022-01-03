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


/// SANKI


export const  checkUserAuthorisationTC = () => (dispatch) => {
    
    (async function checkUserAuthorisation() {
        let userID = 0;
        const res = await authAPI.authMe();

        if (res.resultCode === 0){
                userID = res.data.id;
                dispatch(setInitialisatingUserID(res.data.id));
                dispatch(setAuthUserData(res.data));
        } else {
            dispatch(setAuthorisationStatusAC(false));
        }
        
        const res2 = await profileAPI.getProfileInfo(userID);
        dispatch(setProfileInfo(res2.data));

        const res3 = await profileAPI.getStatus(userID);
        let userStatus = res3.data;
        dispatch(setStatus(userStatus));

        dispatch(setAuthorisationStatusAC(true));
    })();
} 

export default appReduser;

  