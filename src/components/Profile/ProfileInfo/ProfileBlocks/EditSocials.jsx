import { useState } from "react";
import classes from "./EditSocials.module.css";

const EditSocials = (props) => {

    const [inputText, setInputText] = useState({...props.socials});

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

  const inputChange = (e, fieldname) => {
    const value = e.target.value;

    inputText[fieldname] = value;

    setInputText({
        ...inputText
    })
  }


  const submit = (e) => {

    e.preventDefault();
    props.setSocialsTK(inputText);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={classes.editZone}>
      <div className={classes.editWrapper}>
        <div className={classes.names}>
            <span>Facebook:</span>
            <span>Github:</span>
            <span>Instagram:</span>
            <span>Twitter:</span>
            <span>Vk:</span>
            <span>Youtube:</span>
        </div>
        <div>
          <form onSubmit={submit} action="">
            
            <input onChange={e=>inputChange(e,'facebook')} type="text" value={inputText.facebook} />
            <br />
            
            <input onChange={e=>inputChange(e,'github')} type="text" value={inputText.github} />
            <br />
            
            <input onChange={e=>inputChange(e,'instagram')} type="text" value={inputText.instagram} />
            <br />
            
            <input onChange={e=>inputChange(e,'twitter')} type="text" value={inputText.twitter} />
            <br />
            
            <input onChange={e=>inputChange(e,'vk')} type="text" value={inputText.vk} />
            <br />
            
            <input onChange={e=>inputChange(e,'youtube')} type="text" value={inputText.youtube} />
            <br />

            <input type="submit" value="Обновить" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSocials;
