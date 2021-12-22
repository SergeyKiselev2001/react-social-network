

import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Initialisation extends React.Component {

    componentDidMount(){
        
    }

    componentDidUpdate(){
        debugger;
        if (this.props.isUserAuthorised === true){
            return (
                <Redirect to="/profile" />
            )
        }

        if (this.props.isUserAuthorised === false){
            return (
                <Redirect to="/login" />
            )
        }
    }

    render(){
        return (
            <h1>ЗАГРУЗКА...</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isUserAuthorised: state.app.isUserAuthorised
    }
}


const InitialisationContainer = connect(mapStateToProps, {

})(Initialisation)


export default InitialisationContainer;