


import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import axios from 'axios';
import { setAuthUserData } from "../../redux/authReduser";


class HeaderContainer extends React.Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials : true
        })
            .then((res)=>{
                if (res.data.resultCode == 0){
                
                    this.props.setAuthUserData(res.data.data);
                }
                
            })
    }

    render(){
        return (
            <Header props={this.props} />
        )
    }

}


let mapStateToProps = (state) => {
    return {
        userId : state.auth.userId,
        isAuth : state.auth.isAuth,
        authData : state.auth.authData
    }
}


export default connect (mapStateToProps, {
    setAuthUserData
}) (HeaderContainer);