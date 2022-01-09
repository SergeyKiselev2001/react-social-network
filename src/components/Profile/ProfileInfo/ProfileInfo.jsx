import React, { useState } from "react";

import classes from "./ProfileInfo.module.css";
import photo from "./../../../assets/images/cheems.jpg";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import EditSocials from "./ProfileBlocks/EditSocials";
import Socials from "./ProfileBlocks/Socials";
import { useEffect } from "react";

const ProfileInfo = (props) => {


  debugger;
  
  const onPhotoSelected = (event) => {
    if (event.target.files.length > 0) {
      props.setPhoto(event.target.files[0]);
    }
  };

  const [editMode, setEditMode] = useState(false);

  const [socials, setSocials] = useState({...props.ProfileInfo.contacts});

  useEffect(()=>{
    setSocials({...props.ProfileInfo.contacts});
  }, [props.ProfileInfo.contacts])


  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  return (

    <div>
      {editMode && (
        <div onClick={changeEditMode} className={classes.editingField}>
          <EditSocials socials={socials} setSocialsTK={props.setSocialsTK} />
        </div>
      )}

      <div className={classes.content__header}>
        <img
          className={classes.content__avatar}
          src={props.ProfileInfo.photos?.small || photo}
        />
        {props.isOwner && (
          <div className={classes.inputFileWrapper}>
            <span className={classes.inputSpan}>New Photo</span>
            <input
              className={classes.inputFile}
              type="file"
              onChange={onPhotoSelected}
            />
          </div>
        )}
        <span className={classes.content__author}>
          @{props.ProfileInfo.fullName}
        </span>

        {props.isOwner && (
          <div onClick={changeEditMode} className={classes.socialLinksEditor} />
        )}

        <Socials {...socials} />
      </div>

      <h3>
        Обо мне: {props.ProfileInfo.aboutMe ? props.ProfileInfo.aboutMe : "-"}
      </h3>

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatusTK}
        getStatus={props.getStatusTK}
        isOwner={props.isOwner}
      />
    </div>
  );
};

export default ProfileInfo;
