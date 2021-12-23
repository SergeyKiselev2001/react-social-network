let initialState = {

  

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
    { id: 1, src: '/users', name: 'USERS' },
  ],
};

const sidebarReduser = (state = initialState, action) => {
  return state;
};






export default sidebarReduser;
