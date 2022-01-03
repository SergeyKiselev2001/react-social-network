import './App.css';

import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { UsersContainer } from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Initialisation from './components/Initialisation/Initialisation';
import { connect } from 'react-redux';
import React from 'react';
import store from './redux/REDUX_STORE';
// import { fakeAC } from './redux/dialogsReduser';
import TestComp from './components/TestComp/TestComp';

// import classes from './style/Application.css';


class App extends React.Component {


  renderContent(){
    if (this.props.isUserAuthorised === false || this.props.isUserAuthorised === true){
        return (
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
                    path="/news"
                    render={ () => <TestComp/> }
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
        )
    } else {
      return (
        <Initialisation/>
      )
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div className="App">
            {
              this.renderContent()
            }
        </div>
      </BrowserRouter>
    );
  }
  
};

const mapStateToProps = state => {
  return {
    isUserAuthorised: state.app.isUserAuthorised
  }
}

const AppContainer = connect(mapStateToProps,{
  
})(App);

export default AppContainer;
