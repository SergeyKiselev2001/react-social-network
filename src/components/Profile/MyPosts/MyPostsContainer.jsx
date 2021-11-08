import React from 'react';
import MyPosts from './MyPosts';

import { addPostAC, changeInputAC } from '../../../redux/profileReduser';
import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
 
//   return (

//     <StoreContext.Consumer>
//       {
//         (store)=>{

//           let state = store.getState();

//           let addPost = () => {
//               store.dispatch(addPostAC());
//           }

//           let changeInput = (e) => {
//               store.dispatch(changeInputAC(e));
//           }   

//           return (
//             <MyPosts
//             addPost={addPost}
//             changeInput={changeInput}
//             state = {store.getState().profilePage.postsData}
//             currentInputData={store.getState().profilePage.currentInputData}
//           />
//           )
//         }
//       }
//     </StoreContext.Consumer>

//   );
// };

const mapStateToProps = (state) => {
  return {
    state: state.profilePage.postsData,
    currentInputData: state.profilePage.currentInputData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {return dispatch(addPostAC())},
    changeInput: (e) => {return dispatch(changeInputAC(e))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
