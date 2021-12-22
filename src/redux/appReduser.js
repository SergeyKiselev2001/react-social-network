import { authAPI } from "../API/API";
import { authMeThunkCreator } from "./authReduser";



let initialState = {
    
    isUserAuthorised : null

};
  
const appReduser = (state = initialState, action) => {
    switch (action.type){
        case "SET_AUTHORISATION_STATUS":
            debugger;
            return {
                ...state,
                isUserAuthorised : action.status
            }
        default:
            return {
                ...state
            }
    }
};

export const setAuthorisationStatusAC = (status) => {
    return {
        type: "SET_AUTHORISATION_STATUS",
        status : status
    }
}


export const checkUserAuthorisationTC = () => (dispatch) => {
    /// authMeThunkCreator(); на будущее...
    authAPI.authMe().then(
        res=>{
            if (res.resultCode === 0){
                dispatch(setAuthorisationStatusAC(true));
            }

            if (res.resultCode != 0){
                dispatch(setAuthorisationStatusAC(false));
            }
        }
    )
} 

export default appReduser;

  