import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import StoreContext from './StoreContext';
import NavbarContainer from './components/Navbar/NavbarContainer';

import { UsersContainer } from './components/Users/UsersContainer';


import User from './components/Users/Users';

// import classes from './style/Application.css';



const App = (props) => {
  // component={Profile} postsData={props.postsData} />

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />

          <NavbarContainer />

         
          <div className="content">
              <Route 
                  path="/dialogs" 
                  render={ () => <DialogsContainer />  } 
              />
              
              <Route 
                  path="/profile" 
                  render={ () => 
                  <Profile /> } 
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
