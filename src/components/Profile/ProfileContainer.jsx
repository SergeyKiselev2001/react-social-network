// import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import { connect } from "react-redux";
import { profileDidMountThunkCreator } from "../../redux/profileReduser";
import { Redirect, withRouter } from "react-router";

class ProfileContainer extends React.Component {

  async componentDidMount() {

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
    isAuthorised : state.auth.isAuth,
    ProfileInfo: state.profilePage.profileInfo,

  };
};





let ProfileContainerCONNECTED = connect(mapStateToProps, {
  profileDidMountThunkCreator
})(ProfileContainer);

export default withRouter(ProfileContainerCONNECTED);
