
import { Redirect } from "react-router";

import React from 'react';
import { connect } from "react-redux";

const mapStateToPropsAuth = (state) => {
    return {
        isAuthorised: state.auth.isAuth,
    };
};

let withAuthRedirect = (Component) => {

    class WrapperContainer extends React.Component {
        render() {
            debugger;
            return this.props.isAuthorised ? <Component {...this.props} /> : <Redirect to="/login" /> 
        }
    }
    let withAuthRedirectConnected = connect(mapStateToPropsAuth)(WrapperContainer);
    return withAuthRedirectConnected;
}


export default withAuthRedirect;