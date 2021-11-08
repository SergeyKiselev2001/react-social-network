export let addCommentAC = () => ({ type: 'ADD-COMMENT' });

export let changeCommentAC = (msg) => ({
  type: 'CHANGE-COMMENT-INPUT',
  inputTxt: msg,
});

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE-COMMENT-INPUT':
      state.newMessageBody = action.inputTxt;
      break;
    case 'ADD-COMMENT':
      let newMsg = { id: 5, msg: state.newMessageBody };

      state.messagesData.push(newMsg);
      state.newMessageBody = '';
      break;
  }

  return state;
};

export default dialogsReduser;
