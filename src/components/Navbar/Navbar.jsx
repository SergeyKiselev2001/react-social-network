import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav__link}>
        <NavLink to="/profile" activeClassName={classes.active_link}>Profile</NavLink>
      </div>
      <div className={classes.nav__link}>
        <NavLink to="/dialogs" activeClassName={classes.active_link}>Messages</NavLink>
      </div>
      <div className={classes.nav__link}>
        <NavLink to="#">News</NavLink>
      </div>
      <div className={classes.nav__link}>
        <NavLink to="#">Music</NavLink>
      </div>
      <div className={classes.nav__link}>
        <NavLink to="#">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
