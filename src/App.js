import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Initialisation from './components/Initialisation/Initialisation';
import { connect } from 'react-redux';
import React from 'react';
import SuspenseHOC from './components/HOCs/SuspenseHOC';


const DialogsContainer = React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const TestComp = React.lazy(()=> import('./components/TestComp/TestComp'));
const UsersContainer = React.lazy(()=> import('./components/Users/UsersContainer'));


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
                      render={SuspenseHOC(DialogsContainer)} 
                  />

                  <Route 
                    path="/news"
                    render={SuspenseHOC(TestComp)}
                  />
                  
                  <Route 
                      path="/profile/:USER_ID?" 
                      render={ () => 
                      <ProfileContainer /> } 
                  />
    
                  <Route 
                      path="/users" 
                      render={SuspenseHOC(UsersContainer)}
    
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
