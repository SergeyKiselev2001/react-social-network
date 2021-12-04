import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import StoreContext from './StoreContext';
import NavbarContainer from './components/Navbar/NavbarContainer';

import { UsersContainer } from './components/Users/UsersContainer';


import User from './components/Users/Users';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

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
