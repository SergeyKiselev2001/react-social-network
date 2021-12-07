


import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, authMeThunkCreator } from "../../redux/authReduser";

class HeaderContainer extends React.Component {
    
    componentDidMount(){
        this.props.authMeThunkCreator();
    }

    render(){return (<Header props={this.props} />)}
}

let mapStateToProps = (state) => {
    return {
        userId : state.auth.userId,
        isAuth : state.auth.isAuth,
        authData : state.auth.authData
    }
}

export default connect (mapStateToProps, {
    setAuthUserData,
    authMeThunkCreator
}) (HeaderContainer);