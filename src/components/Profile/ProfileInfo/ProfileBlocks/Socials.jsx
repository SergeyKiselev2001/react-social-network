
import classes from "./Socials.module.css";

import fb from "./../../../../assets/images/fb-logo.png";
import gh from "./../../../../assets/images/gh-logo.png";
import inst from "./../../../../assets/images/inst-logo.png";
import tw from "./../../../../assets/images/tw-logo.png";
import vk from "./../../../../assets/images/vk-logo.png";
import yt from "./../../../../assets/images/yt-logo.png";

const Socials = props => {

    
    return (
        <div className={classes.socialLinks}>
            {props.facebook && (
              <div className={classes.socials}>
                <a href={props.facebook} target="_blank">
                  <img src={fb} alt="socials" />
                </a>
              </div>
            )}

            {props.github && (
              <div className={classes.socials}>
                <a href={props.github} target="_blank">
                  <img src={gh} alt="socials" />
                </a>
              </div>
            )}

            {props.instagram && (
              <div className={classes.socials}>
                <a href={props.instagram} target="_blank">
                  <img src={inst} alt="socials" />
                </a>
              </div>
            )}

            {props.twitter && (
              <div className={classes.socials}>
                <a href={props.twitter} target="_blank">
                  <img src={tw} alt="socials" />
                </a>
              </div>
            )}

            {props.vk && (
              <div className={classes.socials}>
                <a href={props.vk} target="_blank">
                  <img src={vk} alt="socials" />
                </a>
              </div>
            )}

            {props.youtube && (
              <div className={classes.socials}>
                <a href={props.youtube} target="_blank">
                  <img src={yt} alt="socials" />
                </a>
              </div>
            )}
        </div>
    )
}

export default Socials;