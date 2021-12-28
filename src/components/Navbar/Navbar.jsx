import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from './Navbar.module.css';

const Navbar = (props) => {

  let friendsList = props.friends.map((el) => <Friends key={el.id} fio={el.fio} />);

  let navList = props.links.map((el) => {
    return (
      <div className={classes.nav__link}>
        <NavLink  to={el.src} activeClassName={classes.active_link}>
          {el.name}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className={classes.nav}>
      <div>{navList}</div>

      <div>{friendsList}</div>
    </nav>
  );
};

export default Navbar;
