import MyPosts from './MyPosts/MyPosts';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div>
      
      <ProfileInfo />

      <MyPosts 
        currentInputData={props.currentInputData}
        changeInput={props.changeInput}
        postsData={props.postsData} 
        addPost={props.addPost} 
      />
    </div>
  );
};

export default Profile;
