import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';
import { usersReduser } from './usersReduser';
import authReduser from './authReduser';
import {reducer as formReducer} from 'redux-form';
import appReduser from './appReduser';

import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers({
    profilePage : profileReduser,
    messagesPage : dialogsReduser,
    sidebarPage : sidebarReduser,
    users : usersReduser,
    auth : authReduser,
    app : appReduser,
    form : formReducer,
    
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;