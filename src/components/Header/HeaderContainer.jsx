


import React from "react";
import { connect } from "react-redux";
import Header from "./Header";



class HeaderContainer extends React.Component {

    constructor(props){
        super(props);
        
    }

    render(){
        return (
            <Header userId={this.props.userId}/>
        )
    }

}


let mapStateToProps = (state) => {
    return {
        userId : state.auth.userId
    }
}


export default connect (mapStateToProps, {

}) (HeaderContainer);