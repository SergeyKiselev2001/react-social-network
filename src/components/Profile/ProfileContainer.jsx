
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setProfileInfo, setCurrentUserID } from '../../redux/profileReduser';
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {




  componentDidMount(){

    let currentUserId = this.props.match.params.USER_ID;

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + currentUserId)
            .then((req)=>{
              this.props.setProfileInfo(req.data); 
            });
  }

  render(){
    return (
      <div>
      
        <ProfileInfo {...this.props} />
        <MyPostsContainer/>

      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    a : 13, 
    ProfileInfo : state.profilePage.profileInfo
  }
}


// let ProfileContainerWR = withRouter(ProfileContainer);

// export default connect (mapStateToProps, {
//   setProfileInfo,
//   setCurrentUserID
// })(ProfileContainerWR);


let ProfileContainerCONNECTED = connect (mapStateToProps, {
    setProfileInfo,
    setCurrentUserID
  })(ProfileContainer);

export default withRouter(ProfileContainerCONNECTED);
  
