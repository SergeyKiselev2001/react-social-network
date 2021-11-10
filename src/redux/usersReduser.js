


let initialState = {
    users: []
}

export let usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el=>{
                    if (el.id == action.userId){
                        return {...el, followed: true}
                    } 
                    return el;
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el=>{
                    if (el.id == action.userId){
                        return {...el, followed: false}
                    } 
                    return el;
                })
            }
        case "SET_USERS":

            return {
                ...state,
                users: [...action.users]
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({type:"FOLLOW",userId:userId});
export const unfollowAC = (userId) => ({type:"UNFOLLOW",userId:userId});
export const setUsersAC = (users) => ({type: "SET_USERS", users: users});