// import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import { connect } from "react-redux";
import { profileDidMountThunkCreator,  setPhoto,  getStatusTK, updateStatusTK, setSocialsTK } from "../../redux/profileReduser";
import { Redirect, withRouter } from "react-router";
import withAuthRedirect from "../HOCs/AuthHOC";
import { compose } from "redux";
import { profileInfoSL, profileStatusSL } from "../../redux/SELECRORS";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.refreshProfile();
  }


  componentDidUpdate(prevProps, prevState, snapshot){

    if (this.props.match.params.USER_ID != prevProps.match.params.USER_ID){
      this.refreshProfile();
    }
    
  }

  refreshProfile(){
    let currentUserId = this.props.match.params.USER_ID || this.props.myID;
 
    this.props.profileDidMountThunkCreator(currentUserId);
    this.props.getStatusTK(currentUserId);
  }

  render() {

    

    if (this.props.isAuthorised === false){
      return <Redirect to="/login"/>
    } 
    return (
      <div>
        <ProfileInfo 
            setSocialsTK={this.props.setSocialsTK}
            isOwner={!this.props.match.params.USER_ID}
            {...this.props}
        />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProfileInfo: profileInfoSL(state),
    status : profileStatusSL(state),
    myID: state.app.userId
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    profileDidMountThunkCreator,
    getStatusTK,
    updateStatusTK,
    setPhoto,
    setSocialsTK

  }),
  withAuthRedirect
)(ProfileContainer);