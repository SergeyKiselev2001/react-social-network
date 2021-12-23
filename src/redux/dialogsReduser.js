


let initialState = {
  messagesData: [
    { id: 1, msg: "Привет" },
    { id: 2, msg: "Тестовые сообщения" },
    { id: 3, msg: "Напиши что нибудь в чат" },
    { id: 4, msg: "Лорем ипусм" },
  ],
  dialogsData: [
    { id: 1, name: "Евгений" },
    { id: 2, name: "Дмитрий" },
    { id: 3, name: "Валера" },
    { id: 4, name: "Светлана" },
    { id: 5, name: "Настя" },
  ],

  fake: 0,
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {

    case "ADD-COMMENT":
      debugger;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 5, msg: action.currentMsg }],
      };
    case "FAKE":
      return {
        ...state,
        fake: action.fake
      }
    default:
      return state;
  }
};

export const addCommentAC = (currentMsg) => ({ type: "ADD-COMMENT", currentMsg});
export const fakeAC = (fake) => ({ type: "FAKE", fake});
export default dialogsReduser;
