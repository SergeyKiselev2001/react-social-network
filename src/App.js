import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

// import classes from './style/Application.css';


const App = (props) => {
  // component={Profile} postsData={props.postsData} />

  return (
    <BrowserRouter>
      <div className="App">

          
        <div className="wrapper">
          <HeaderContainer />

          <NavbarContainer />

         
          <div className="content">

              <Route
                  path="/login"
                  render={ ()=> <Login/> }
              />

              <Route 
                  path="/dialogs" 
                  render={ () => <DialogsContainer />  } 
              />
              
              <Route 
                  path="/profile/:USER_ID?" 
                  render={ () => 
                  <ProfileContainer /> } 
              />

              <Route 
                  path="/users" 
                  render={ () => 
                  <UsersContainer/> }

              />
          </div>
   
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
