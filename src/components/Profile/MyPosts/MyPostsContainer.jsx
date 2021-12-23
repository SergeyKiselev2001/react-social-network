
import MyPosts from './MyPosts';

import { addPostAC, setUserPhoto } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import {profilePostsDataSL} from './../../../redux/SELECRORS';


const mapStateToProps = (state) => {
  return {
    state:  profilePostsDataSL(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (currentMsg) => {return dispatch(addPostAC(currentMsg))},
    setUserPhoto: (file) => {return dispatch(setUserPhoto(file))}
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
