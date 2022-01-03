import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({preview, id}) => {
    return (
      <NavLink to={'/dialogs/' + preview}>
        <div className={classes.dialog}>
          <div className={classes.circle}>{id}</div>
          <div className={classes.person}>{preview}</div>
        </div>
      </NavLink>
    );
  };

  export default DialogItem;