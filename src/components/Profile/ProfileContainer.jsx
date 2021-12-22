// import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import { connect } from "react-redux";
import { profileDidMountThunkCreator,  getStatusTK, updateStatusTK, profileInfoSL, profileStatusSL } from "../../redux/profileReduser";
import { Redirect, withRouter } from "react-router";
import withAuthRedirect from "../HOCs/AuthHOC";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    
    /// НЕ ДОДЕЛАНО
    let currentUserId = this.props.match.params.USER_ID || 21178;

    console.log('PC')
    this.props.profileDidMountThunkCreator(currentUserId);
    this.props.getStatusTK(currentUserId);
  }

  render() {
    if (this.props.isAuthorised === false){
      return <Redirect to="/login"/>
    } 
    return (
      <div>
        <ProfileInfo {...this.props}/>
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProfileInfo: profileInfoSL(state),
    status : profileStatusSL(state)
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    profileDidMountThunkCreator,
    getStatusTK,
    updateStatusTK,

  }),
  withAuthRedirect
)(ProfileContainer);