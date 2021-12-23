

import React from "react"
import { connect } from "react-redux";
import { userIdSL, userStatusSL } from "../../redux/SELECRORS";
import {checkUserAuthorisationTC} from './../../redux/appReduser';

class Initialisation extends React.Component {

    componentDidMount(){
        this.props.checkUserAuthorisationTC();
    }


    render(){
        
        return (
            <h1>ЗАГРУЗКА...</h1>
        )
    }
}


const mapStateToProps = state => {
    return {
        userId : userIdSL(state),
        userStatus : userStatusSL(state)
    }
}



export default connect(mapStateToProps, {
    checkUserAuthorisationTC,
    
})(Initialisation);