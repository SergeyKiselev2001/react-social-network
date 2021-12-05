import React from "react";

import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

  //let currentUserId = props.location.pathname.replace('/profile/','');
  //setCurrentUserID

  // {
  //   aboutMe: "я круто чувак 1001%",
  //   contacts: {
  //   facebook: "facebook.com",
  //   website: null,
  //   vk: "vk.com/dimych",
  //   twitter: "https://twitter.com/@sdf",
  //   instagram: "instagra.com/sds",
  //   youtube: null,
  //   github: "github.com",
  //   mainLink: null
  //   },
  //   lookingForAJob: true,
  //   lookingForAJobDescription: "не ищу, а дурачусь",
  //   fullName: "samurai dimych",
  //   userId: 2,
  //   photos: {
  //   small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
  //   large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
  //   }
  //   }
  
    return (
      <div>
        <div className={classes.content__header}>
          <img
            className={classes.content__avatar}
            // src="https://www.izmirankareklam.com/wp-content/uploads/2020/12/1.png"
            src={props.ProfileInfo.photos?.small}
          ></img>
          <span className={classes.content__author}>
            @{props.ProfileInfo.fullName}
          </span>
        </div>
      <h3>{props.ProfileInfo.aboutMe}</h3>
      <h3>VK - {props.ProfileInfo.contacts?.vk}</h3>
      
      </div>
    );
  
};

export default ProfileInfo;
