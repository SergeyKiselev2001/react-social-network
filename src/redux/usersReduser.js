


let initialState = {
    users: [],
    currentPageUsers: [],
    totalCount: 10,
    usersPerPage: 100,
    amountOfPages: [1],
    currentPage: 1,

    showLoader: true,
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
        
        case "SET_CURRENT_PAGE_USERS":
            return {
                ...state,
                currentPageUsers : [...action.currentPageUsers]
            }

        case "SET_USERS_AMOUNT":
        
            return {
                ...state,
                totalCount: action.totalCount
            }
        
        case "SET_PAGES_AMOUNT":

            let buffer = [];
            for (let i = 1; i < action.amountOfPages+1; i++){
                buffer.push(i);
            }
            
            return {
                ...state,
                amountOfPages: buffer
            }
        
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage : action.currentPage
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({type:"FOLLOW",userId:userId});
export const unfollowAC = (userId) => ({type:"UNFOLLOW",userId:userId});
export const setUsersAC = (users) => ({type: "SET_USERS", users: users});
export const setCurrentPageUsersAC = (currentPageUsers) => ({type: "SET_CURRENT_PAGE_USERS", currentPageUsers: currentPageUsers});

export const setUsersAmountAC = (amount) => ({type: "SET_USERS_AMOUNT", totalCount: amount});
export const setPagesAmountAC = (amount) => ({type: "SET_PAGES_AMOUNT", amountOfPages: amount});
export const setCurrentPageAC = (number) => ({type: "SET_CURRENT_PAGE", currentPage: number});