
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import { maxLengthTC, required } from '../../../utils/validators/VALIDATORS';
import { Textarea } from '../../common/FormControls/FormControls';


const MyPosts = React.memo((props) => {

  console.log("RENDER MY POSTS");
  
  let postsData = props.state;
  let postsElements = postsData.map( el =>  <Post msg={el.msg}/> );


  let storeData = (obj) => {
    props.addPost(obj.textareaData);
  }

  return (
    <div className={classes.MyPosts}>
      <div className={classes.content__add_post}><h3>ADD POST</h3></div>
      <div className={classes.content__wall}>
        WALL 
        <MyPostsFormContainer onSubmit={storeData}/>
        {postsElements}
      </div>
    </div>
  );
});

const lengthValidator = maxLengthTC(10);

const MyPostsForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field type="text" validate={[required, lengthValidator]} component={Textarea} name="textareaData" placeholder='test'></Field>
      {/* <Field type="file" component="input" name="userPhoto"></Field> */}
      <br />
      <input type="submit" placeholder="LOGIN"/>
    </form>
  )
}

const MyPostsFormContainer = reduxForm({
  form: "postInput",
  fields: ['textareaData', 'userPhoto']
})(MyPostsForm);

export default MyPosts;