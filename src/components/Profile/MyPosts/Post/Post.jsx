import classes from './Post.module.css';

const Post = (props) => {
  return <div className={classes.Post}>{props.msg}</div>;
};

export default Post;
