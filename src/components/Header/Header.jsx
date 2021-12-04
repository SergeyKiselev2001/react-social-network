import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  debugger;
  return (
    <header className={classes.header}>
      <img
        src="https://uc20a3d36d20cc7212ef2855648a.previews.dropboxusercontent.com/p/thumb/ABUaDGlLgD6cl4P9ZCFWZ6AOyrHNVKFJxwMpG5RP3YR9iJxX9zail9hNPzi8cFa42tvsdi-9q43ml-NdZzEoZwOWsxhv80ztHS4AeXRi_vax0vavXdTyce-_XhgFA0E1okOsqWVuQePrM7wCB9aLOL6nJZDxSmXcM0cDQ-06AnHI3yFK5kKO4m8lyubMIqYDa75kh7JXUTJyBTzA22hJgB1LktfESvyzC_JX3wNmIKoz8BXgwQcFpENW2LKilb9NWiOs63lt9ZzTz3lr1jXtG1xREhsL8-bNbWXGjak7E-988Sbu_onSUvg8SeCEjlWBYcRwkFb9fOgW3TOS7POXhXkzw8zGvfnW6JZjR3-JrG3G6g/p.jpeg?fv_content=true&size_mode=5"
        alt="img"
      />
      <NavLink to="/login">
        <div className={classes.loginBlock}>
          LOGIN
        </div>
      </NavLink>
      
    </header>
  );
};

export default Header;
