import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  {id: 1, likesCount: 34, msg: 'heheheh'},
  {id: 2, likesCount: 63, msg: 'How is your it kamasutra???'},
  {id: 3, likesCount: 27, msg: 'Yo'},
  {id: 4, likesCount: 12, msg: 'Yo mtfk'},
];


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
