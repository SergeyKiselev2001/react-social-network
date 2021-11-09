import {combineReducers, createStore} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';
import { usersReduser } from './usersReduser';




let redusers = combineReducers({
    profilePage : profileReduser,
    messagesPage : dialogsReduser,
    sidebarPage : sidebarReduser,
    users : usersReduser
});

let store = createStore(redusers);


export default store;