import {combineReducers, createStore} from 'redux';
import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';




let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage : dialogsReduser,
    sidebarPage : sidebarReduser
});

let store = createStore(redusers);


export default store;