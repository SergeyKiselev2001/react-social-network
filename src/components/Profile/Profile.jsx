import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      
      <ProfileInfo />

      <MyPosts 
        currentInputData={props.currentInputData}
        dispatch = {props.dispatch}
        postsData={props.postsData} 
      />
    </div>
  );
};

export default Profile;
