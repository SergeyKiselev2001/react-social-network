// import classes from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setProfileInfo, setCurrentUserID } from "../../redux/profileReduser";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {

  async componentDidMount() {
    let currentUserId = this.props.match.params.USER_ID;

    if (!currentUserId) {
      await axios
        .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.resultCode == 0) {
            currentUserId = res.data.data.id;
          }
        });
    }

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/` + currentUserId
      )
      .then((res) => {
        this.props.setProfileInfo(res.data);
      });
  }

  render() {
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
    a: 13,
    ProfileInfo: state.profilePage.profileInfo,
  };
};



let ProfileContainerCONNECTED = connect(mapStateToProps, {
  setProfileInfo,
  setCurrentUserID,

})(ProfileContainer);

export default withRouter(ProfileContainerCONNECTED);
