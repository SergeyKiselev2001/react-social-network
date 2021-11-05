
export let addPostAC = () => ({ type: 'ADD-POST' });
export let changeInputAC = (msg) => ({
    type: 'CHANGE-INPUT',
    inputTxt: msg,
  });
  

const profileReduser = (state, action) => {


    switch (action.type){
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
}

export default profileReduser;