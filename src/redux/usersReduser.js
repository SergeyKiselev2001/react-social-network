


let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching : false
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
        
        case "SET_TOTAL_COUNT_USERS":
            return {
                ...state,
                totalUsersCount : action.totalUsersCount
            }
            
        case "CHANGE_PAGE":
     
            return {
                ...state,
                currentPage : action.currentPage
            }
        
        case "TOGGLE_FETCHING":

            return {
                ...state,
                isFetching : action.isFetching
            }


        default:
            return state;
    }

}

export const followAC = (userId) => ({type:"FOLLOW",userId:userId});
export const unfollowAC = (userId) => ({type:"UNFOLLOW",userId:userId});
export const setUsersAC = (users) => ({type: "SET_USERS", users: users});
export const changePageAC = (page) => ({type: "CHANGE_PAGE", currentPage: page});
export const setTotalCountUsersAC = (total) => ({type: "SET_TOTAL_COUNT_USERS", totalUsersCount: total});
export const setFetchingAC = (isFetching) => ({type: "TOGGLE_FETCHING", isFetching: isFetching});
