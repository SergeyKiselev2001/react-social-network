// import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import { connect } from "react-redux";
import { profileDidMountThunkCreator, getStatusTK, updateStatusTK } from "../../redux/profileReduser";
import { Redirect, withRouter } from "react-router";
import withAuthRedirect from "../HOCs/AuthHOC";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    
    let currentUserId = this.props.match.params.USER_ID;

    this.props.profileDidMountThunkCreator(currentUserId);
  }

  render() {
    if (this.props.isAuthorised === false){
      return <Redirect to="/login"/>
    } 
    return (
      <div>
        <ProfileInfo {...this.props} />
        <MyPostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ProfileInfo: state.profilePage.profileInfo,
    status : state.profilePage.status
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    profileDidMountThunkCreator,
    getStatusTK,
    updateStatusTK
  }),
  withAuthRedirect
)(ProfileContainer);