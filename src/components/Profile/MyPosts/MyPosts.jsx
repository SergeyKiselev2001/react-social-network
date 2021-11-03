
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

debugger;
  // let postsData = [
  //   {id: 1, likesCount: 34, msg: 'heheheh'},
  //   {id: 2, likesCount: 63, msg: 'How is your it kamasutra???'},
  //   {id: 3, likesCount: 27, msg: 'Yo'},
  //   {id: 4, likesCount: 12, msg: 'Yo mtfk'},
  // ];
  let postsData = props.postsData;

  let postsElements = postsData.map( el =>  <Post msg={el.msg}/> )

  return (
    <div className={classes.MyPosts}>
      <div className={classes.content__add_post}><h3>ADD POST</h3></div>
      <div className={classes.content__wall}>
        WALL 
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;