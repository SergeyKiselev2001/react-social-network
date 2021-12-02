


import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setCurrentPageUsersAC, setPagesAmountAC, setUsersAC, setUsersAmountAC, unfollowAC } from "../../redux/usersReduser";
import Users from './Users';


let mapStateToProps = (state) => {
    
    return {
        users: state.users.users,
        totalCount : state.users.totalCount,
        usersPerPage : state.users.usersPerPage,
        amountOfPages: state.users.amountOfPages,
        currentPage : state.users.currentPage,
        currentPageUsers : state.users.currentPageUsers,
        showLoader : state.users.showLoader
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users)=> dispatch(setUsersAC(users)),
        setUsersAmount: (amount)=> dispatch(setUsersAmountAC(amount)),
        setPagesAmount: (amount)=> dispatch(setPagesAmountAC(amount)),
        setCurrentPage: (number)=> dispatch(setCurrentPageAC(number)),
        setCurrentPageUsers: (currentPageUsers)=> dispatch(setCurrentPageUsersAC(currentPageUsers))
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);