
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostAC, changeInputAC } from '../../../redux/profileReduser';


const MyPosts = (props) => {

  let postsData = props.postsData;
  let postsElements = postsData.map( el =>  <Post msg={el.msg}/> )



  let addPost = () => {
    props.dispatch(addPostAC());
  }

  let changeInput = (e) => {
    props.dispatch(changeInputAC(e.target.value));
  }

  return (
    <div className={classes.MyPosts}>
      <div className={classes.content__add_post}><h3>ADD POST</h3></div>
      <div className={classes.content__wall}>
        WALL 
        <textarea onChange={changeInput} value={props.currentInputData}/>
        <button onClick={ addPost } >CLICK ME!</button>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;