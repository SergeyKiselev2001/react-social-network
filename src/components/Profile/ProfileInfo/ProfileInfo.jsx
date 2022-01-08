import React from "react";

import classes from "./ProfileInfo.module.css";

import photo from './../../../assets/images/cheems.jpg';

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {


    const onPhotoSelected = event => {
        if (event.target.files.length > 0){
            props.setPhoto(event.target.files[0]);
        };
        
    }

    return (
      <div>
        <div className={classes.content__header}>
          <img
            className={classes.content__avatar}
            // src="https://www.izmirankareklam.com/wp-content/uploads/2020/12/1.png"
            src={props.ProfileInfo.photos?.small || photo}
          ></img>
          {
            props.isOwner &&  
              <div className={classes.inputFileWrapper}>
                <span className={classes.inputSpan}>New Photo</span>
                <input className={classes.inputFile} type='file' onChange={onPhotoSelected}/>
              </div> 
          }
          <span className={classes.content__author}>
            @{props.ProfileInfo.fullName}
          </span>
        </div>
      <h3>{props.ProfileInfo.aboutMe}</h3>
      <h3>VK - {props.ProfileInfo.contacts?.vk}</h3>

        <ProfileStatusWithHooks status={props.status}  updateStatus={props.updateStatusTK} getStatus={props.getStatusTK} />
      </div>
    );
  
};

export default ProfileInfo;
