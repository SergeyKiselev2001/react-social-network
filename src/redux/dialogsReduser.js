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
    { id: 5, name: 'Настя' },
  ],
  newMessageBody: '',
};

const dialogsReduser = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE-COMMENT-INPUT':
      return  {
        ...state,
        newMessageBody : action.inputTxt
      };

    case 'ADD-COMMENT':
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody : '',
        messagesData: [...state.messagesData, { id: 5, msg: body }]
      };
    default:
      return state;
  }
};

export default dialogsReduser;
