
import { Redirect } from "react-router";
import React from 'react';
import { connect } from "react-redux";
import { isAuthSL } from "../../redux/SELECRORS";

const mapStateToPropsAuth = (state) => {
    return {
        isAuthorised: isAuthSL(state)
    };
};

let withAuthRedirect = (Component) => {

    class WrapperContainer extends React.Component {
        render() {
            return this.props.isAuthorised ? <Component {...this.props} /> : <Redirect to="/login" /> 
        }
    }
    let withAuthRedirectConnected = connect(mapStateToPropsAuth)(WrapperContainer);
    return withAuthRedirectConnected;
}

export default withAuthRedirect;