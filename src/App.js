import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

import { Route, BrowserRouter } from 'react-router-dom';
// import classes from './style/Application.css';

const App = (props) => {


  return (
    <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header />

          <Navbar />

          <div className="content">
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} postsData={props.postsData} />
          </div>
   
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
