

import React from "react"
import { connect } from "react-redux";
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
        userId : state.app.userId,
        userStatus : state.app.userStatus,
    }
}



export default connect(mapStateToProps, {
    checkUserAuthorisationTC,
    
})(Initialisation);