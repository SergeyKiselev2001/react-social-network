import { connect } from "react-redux";
import { compose } from "redux";
import 
    {   getUsersThunkCreator,
        setUsers, setCurrentPage, setCurrentPageUsers, 
        setPagesAmount, setUsersAmount, shouldShowLoader,
        setCurrentPageThunkCreator, followThunkCreator,
        unfollowThunkCreator, 
        usersSL,
        totalCountSL,
        usersPerPageSL,
        amountOfPagesSL,
        currentPageSL,
        currentPageUsersSL,
        showLoaderSL,
        followingInProgressIDSL} from "../../redux/usersReduser";
import withAuthRedirect from "../HOCs/AuthHOC";
import Users from './Users';


let mapStateToProps = (state) => {
    
    return {
        users: usersSL(state),
        totalCount : totalCountSL(state),
        usersPerPage : usersPerPageSL(state),
        amountOfPages: amountOfPagesSL(state),
        currentPage : currentPageSL(state),
        currentPageUsers : currentPageUsersSL(state),
        showLoader : showLoaderSL(state),
        followingInProgressID : followingInProgressIDSL(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users)=> dispatch(setUsersAC(users)),
//         setUsersAmount: (amount)=> dispatch(setUsersAmountAC(amount)),
//         setPagesAmount: (amount)=> dispatch(setPagesAmountAC(amount)),
//         setCurrentPage: (number)=> dispatch(setCurrentPageAC(number)),
//         setCurrentPageUsers: (currentPageUsers)=> dispatch(setCurrentPageUsersAC(currentPageUsers)),
//         shouldShowLoader: (shouldShowLoader)=> dispatch(shouldShowLoaderAC(shouldShowLoader))
//     }
// }

export let UsersContainer = compose(connect(mapStateToProps, 
{
    setUsers,
    setUsersAmount,
    setPagesAmount,
    setCurrentPage,
    setCurrentPageUsers,
    shouldShowLoader,

    getUsersThunkCreator,
    setCurrentPageThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
}),
withAuthRedirect
)(Users);