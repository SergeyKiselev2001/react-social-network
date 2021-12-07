import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

import Dialogs from './Dialogs';
import { changeCommentAC } from '../../redux/dialogsReduser';
import { addCommentAC } from '../../redux/dialogsReduser';
// import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOCs/AuthHOC';


// const DialogsContainer = () => {


//   return (
//     <StoreContext.Consumer>
//       {
//         (store)=>{
//           let state = store.getState();


//             let addMessage = () => {
//               store.dispatch(addCommentAC());
//             }
          
//             let inputChanging = (txt) => {
//              store.dispatch(changeCommentAC(txt));
//             }

//         return (
//           <Dialogs 
//               state={state.messagesPage}
//               addMessage={addMessage}
//               inputChanging={inputChanging}
//           />
//         )
//         }
//       }
//     </StoreContext.Consumer>
    
//   );
// };

const mapStateToProps = (state) => {
  return {
    state : state.messagesPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage : () => { dispatch(addCommentAC());},
    inputChanging: (txt) => { dispatch(changeCommentAC(txt)); }
  }
}

const DialogsContainerWrapper = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(DialogsContainerWrapper);


export default DialogsContainer;
