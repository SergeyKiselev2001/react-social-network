
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div className={classes.content__header}>

          <img
            className={classes.content__avatar}
            src="https://www.izmirankareklam.com/wp-content/uploads/2020/12/1.png"
          ></img>
          <span className={classes.content__author}>@Kiselev_Sergey</span>
        </div>
    )
  };


  export default ProfileInfo;