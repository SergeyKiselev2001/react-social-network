import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  debugger;
  return (
    <div>
      
      <ProfileInfo />

      <MyPosts postsData={props.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
