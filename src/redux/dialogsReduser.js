export let addCommentAC = () => ({ type: 'ADD-COMMENT' });


export let changeCommentAC = (msg) => ({
  type: 'CHANGE-COMMENT-INPUT',
  inputTxt: msg,
});



const dialogsReduser = (state, action) => {

    switch (action.type){
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