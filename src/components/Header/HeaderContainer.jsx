


import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, authMeThunkCreator, logoutMeTC} from "../../redux/authReduser";
import { userIdSL, isAuthSL, authDataSL } from "../../redux/SELECRORS";


class HeaderContainer extends React.Component {
    
    componentDidMount(){
        this.props.authMeThunkCreator();
    }

    render(){return (<Header props={this.props} />)}
}

let mapStateToProps = (state) => {
    return {
        userId : userIdSL(state),
        isAuth : isAuthSL(state),
        authData : authDataSL(state),
    }
}

export default connect (mapStateToProps, {
    setAuthUserData,
    authMeThunkCreator,
    logoutMeTC
}) (HeaderContainer);