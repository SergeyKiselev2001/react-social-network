import React from "react";

import classes from "./ProfileInfo.module.css";

import photo from "./../../../assets/images/cheems.jpg";

import fb from "./../../../assets/images/fb-logo.png";
import gh from "./../../../assets/images/gh-logo.png";
import inst from "./../../../assets/images/inst-logo.png";
import tw from "./../../../assets/images/tw-logo.png";
import vk from "./../../../assets/images/vk-logo.png";
import yt from "./../../../assets/images/yt-logo.png";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  const onPhotoSelected = (event) => {
    if (event.target.files.length > 0) {
      props.setPhoto(event.target.files[0]);
    }
  };

  // aboutMe: null
  // contacts: {facebook: null, website: null, vk: null, twitter: null, instagram: null, youtube: null, github: null,…}
  // facebook: null
  // github: null
  // instagram: null
  // mainLink: null
  // twitter: null
  // vk: null
  // website: null
  // youtube: null
  // fullName: "SergeyKiselev"
  // lookingForAJob: false
  // lookingForAJobDescription: null
  // photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/21178/user-small.jpg?v=24",…}
  // large: "https://social-network.samuraijs.com/activecontent/images/users/21178/user.jpg?v=24"
  // small: "https://social-network.samuraijs.com/activecontent/images/users/21178/user-small.jpg?v=24"
  // userId: 21178

  return (
    <div>
      <div className={classes.content__header}>
        <img
          className={classes.content__avatar}
          // src="https://www.izmirankareklam.com/wp-content/uploads/2020/12/1.png"
          src={props.ProfileInfo.photos?.small || photo}
        ></img>
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

        <div className={classes.socialLinksWrapper}>
          <div className={classes.socialLinks}>
            {props.ProfileInfo.contacts.facebook && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.facebook} target="_blank">
                  <img src={fb} alt="socials" />
                </a>
              </div>
            )}

            {props.ProfileInfo.contacts.github && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.github} target="_blank">
                  <img src={gh} alt="socials" />
                </a>
              </div>
            )}

            {props.ProfileInfo.contacts.instagram && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.instagram} target="_blank">
                  <img src={inst} alt="socials" />
                </a>
              </div>
            )}

            {props.ProfileInfo.contacts.twitter && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.twitter} target="_blank">
                  <img src={tw} alt="socials" />
                </a>
              </div>
            )}

            {props.ProfileInfo.contacts.vk && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.vk} target="_blank">
                  <img src={vk} alt="socials" />
                </a>
              </div>
            )}

            {props.ProfileInfo.contacts.youtube && (
              <div className={classes.socials}>
                <a href={props.ProfileInfo.contacts.youtube} target="_blank">
                  <img src={yt} alt="socials" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <h3>
        Обо мне: {props.ProfileInfo.aboutMe ? props.ProfileInfo.aboutMe : "-"}
      </h3>

      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatusTK}
        getStatus={props.getStatusTK}
      />
    </div>
  );
};

export default ProfileInfo;
