


let initialState = {
    users: [],
    currentPageUsers: [],
    totalCount: 10,
    usersPerPage: 100,
    amountOfPages: [1],
    currentPage: 1,

    showLoader: false,
    followingInProgress: false
}

export let usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case "FOLLOW":
            debugger;
            return {
                ...state,
                users: state.users.map(el=>{
                    if (el.id == action.userId){
                        return {...el, followed: true}
                    } else {
                        return el
                    }
                    
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

        case "FOLLOWING_IN_PROGRESS":
            return {
                ...state,
                followingInProgress: action.followingInProgress
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

        case "SHOULD_SHOW_LOADER":
            return {
                ...state,
                showLoader: action.shouldShowLoader
            }

        default:
            return state;
    }

}

export const follow = (userId) => ({type:"FOLLOW",userId:userId});
export const unfollow = (userId) => ({type:"UNFOLLOW",userId:userId});
export const followingInProgress = (bool) => ({type: "FOLLOWING_IN_PROGRESS", followingInProgress: bool});

export const setUsers = (users) => ({type: "SET_USERS", users: users});
export const setCurrentPageUsers = (currentPageUsers) => ({type: "SET_CURRENT_PAGE_USERS", currentPageUsers: currentPageUsers});

export const setUsersAmount = (amount) => ({type: "SET_USERS_AMOUNT", totalCount: amount});
export const setPagesAmount = (amount) => ({type: "SET_PAGES_AMOUNT", amountOfPages: amount});
export const setCurrentPage = (number) => ({type: "SET_CURRENT_PAGE", currentPage: number});

export const shouldShowLoader = (shouldShowLoader) => ({type: "SHOULD_SHOW_LOADER", shouldShowLoader: shouldShowLoader});