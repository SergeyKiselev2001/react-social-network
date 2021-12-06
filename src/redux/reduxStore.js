import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';
import { usersReduser } from './usersReduser';
import authReduser from './authReduser';

import thunkMiddleware from 'redux-thunk';


let redusers = combineReducers({
    profilePage : profileReduser,
    messagesPage : dialogsReduser,
    sidebarPage : sidebarReduser,
    users : usersReduser,
    auth : authReduser
});

let store = createStore(redusers, applyMiddleware(thunkMiddleware));


export default store;