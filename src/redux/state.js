import profileReduser from './profileReduser';
import dialogsReduser from './dialogsReduser';
import sidebarReduser from './sidebarReduser';


let store = {
  _state: {
    profilePage: {
      currentInputData: '',
      postsData: [
        { id: 1, likesCount: 34, msg: 'ПРИВЕТ' },
        { id: 2, likesCount: 63, msg: 'тестовый пост 2' },
        { id: 3, likesCount: 27, msg: 'Yo' },
        { id: 4, likesCount: 12, msg: 'пост 4' },
      ],
    },

    messagesPage: {
      messagesData: [
        { id: 1, msg: 'Привет' },
        { id: 2, msg: 'Тестовые сообщения' },
        { id: 3, msg: 'Напиши что нибудь в чат' },
        { id: 4, msg: 'Лорем ипусм' },
      ],
      dialogsData: [
        { id: 1, name: 'Евгений' },
        { id: 2, name: 'Дмитрий' },
        { id: 3, name: 'Валера' },
        { id: 4, name: 'Светлана' },
        { id: 5, name: 'Жанна' },
      ],
      newMessageBody: '',
    },

    sidebar: {
      friends: [
        { id: 1, fio: 'hh' },
        { id: 2, fio: 'gg' },
        { id: 3, fio: 'ez' },
      ],

      links: [
        { id: 1, src: '/profile', name: 'Profile' },
        { id: 1, src: '/dialogs', name: 'Messages' },
        { id: 1, src: '/news', name: 'News' },
        { id: 1, src: '/music', name: 'Music' },
        { id: 1, src: '/settings', name: 'Settings' },
      ],
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('no observers');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    let bufferState = {
      profilePage: profileReduser(this._state.profilePage, action),
      messagesPage: dialogsReduser(this._state.messagesPage, action),
      sidebar: sidebarReduser(this._state.sidebar, action)
    }
    
    this._state = bufferState;
    this._callSubscriber(this._state);
  },
};






export default store;
