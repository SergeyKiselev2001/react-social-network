
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={classes.MyPosts}>
      <div className={classes.content__add_post}>ADD POST</div>
      <div className={classes.content__wall}>
        WALL
        <Post msg="zdarova zaebal1" />
        <Post msg="zdarova zaebal2" />
        <Post msg="zdarova zaebal3" />
      </div>
    </div>
  );
};

export default MyPosts;