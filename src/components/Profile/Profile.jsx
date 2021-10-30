import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div className={classes.content__header}>
        <img
          className={classes.content__avatar}
          src="https://www.izmirankareklam.com/wp-content/uploads/2020/12/1.png"
        ></img>
        <span className={classes.content__author}>@Kiselev_Sergey</span>
      </div>

      <MyPosts />
    </div>
  );
};

export default Profile;
