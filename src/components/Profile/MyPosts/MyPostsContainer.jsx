
import MyPosts from './MyPosts';

import { addPostAC } from '../../../redux/profileReduser';
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
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
