let store = {
  _state: {
    profilePage: {
      currentInputData: '',
      postsData: [
        { id: 1, likesCount: 34, msg: 'ПРИВЕТ' },
        { id: 2, likesCount: 63, msg: 'How is your it kamasutra???' },
        { id: 3, likesCount: 27, msg: 'Yo' },
        { id: 4, likesCount: 12, msg: 'Yo mtfk' },
      ],
    },

    messagesPage: {
      messagesData: [
        { id: 1, msg: 'heheheh' },
        { id: 2, msg: 'How is your it kamasutra???' },
        { id: 3, msg: 'БЛЯЯЯЯЯЯЯЯЯЯЯ' },
        { id: 4, msg: 'Yo' },
      ],
      dialogsData: [
        { id: 1, name: 'БЛЯЯЯЯЯЯЯЯЯяя' },
        { id: 2, name: 'dimich2' },
        { id: 3, name: 'dimich3' },
        { id: 4, name: 'hi hitler' },
        { id: 5, name: 'u kinda smell... like a baka...' },
      ],
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

  addPost() {
    let newPost = {
      id: 5,
      msg: this._state.profilePage.currentInputData,
      likesCount: 0,
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.currentInputData = '';
    this._callSubscriber(this._state);
  },

  changeInput(inputTxt) {
    this._state.profilePage.currentInputData = inputTxt;

    console.log(inputTxt);
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
