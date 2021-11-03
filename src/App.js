import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Route, BrowserRouter } from 'react-router-dom';
// import classes from './style/Application.css';

const App = (props) => {
  // component={Profile} postsData={props.postsData} />

  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />
          <Navbar state={props.state.sidebar} />
         
          <div className="content">
              <Route 
                  path="/dialogs" 
                  render={ () => <Dialogs messagesData={props.state.messagesPage.messagesData} dialogsData={props.state.messagesPage.dialogsData} />  } 
              />
              <Route 
                  path="/profile" 
                  render={ () => <Profile postsData={props.state.profilePage.postsData} /> } 
              />
          </div>
   
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
