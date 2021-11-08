export let addPostAC = () => ({ type: 'ADD-POST' });
export let changeInputAC = (msg) => ({
  type: 'CHANGE-INPUT',
  inputTxt: msg,
});

let initialState = {
  currentInputData: '',
  postsData: [
    { id: 1, likesCount: 34, msg: 'ПРИВЕТ' },
    { id: 2, likesCount: 63, msg: 'тестовый пост 2' },
    { id: 3, likesCount: 27, msg: 'Yo' },
    { id: 4, likesCount: 12, msg: 'пост 4' },
  ],
};

const profileReduser = (state = initialState, action) => {


  switch (action.type) {
    case 'CHANGE-INPUT':
      state.currentInputData = action.inputTxt;
      break;
    case 'ADD-POST':
      let newPost = {
        id: 5,
        msg: state.currentInputData,
        likesCount: 0,
      };

      state.postsData.push(newPost);
      state.currentInputData = '';
      break;
  }

  return state;
};

export default profileReduser;
