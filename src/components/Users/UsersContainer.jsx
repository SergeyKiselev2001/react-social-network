


import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../redux/usersReduser";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId))
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);