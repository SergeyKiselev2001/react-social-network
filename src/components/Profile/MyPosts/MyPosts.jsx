
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let postsData = props.postsData;
  let postsElements = postsData.map( el =>  <Post msg={el.msg}/> )

  let textareaLink = React.createRef();


  let addPost = () => {
    props.addPost(textareaLink.current.value);
 
  }

  let changeInput = () => {
    props.changeInput(textareaLink.current.value);
  }

  return (
    <div className={classes.MyPosts}>
      <div className={classes.content__add_post}><h3>ADD POST</h3></div>
      <div className={classes.content__wall}>
        WALL 
        <textarea onChange={changeInput} ref={textareaLink} value={props.currentInputData}/>
        <button onClick={ addPost } >CLICK ME!</button>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;