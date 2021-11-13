import React from 'react';
import classes from './Users.module.css';
import userPhoto from './../../assets/images/cheems.jpg';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  pagesCount = pagesCount ? pagesCount : 1;

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  pages = pages[1] ? pages : [1];
  

  console.log( props.currentPage, ' props.currentPage');


  return (
    <div>
      <div>
        {pages.map((el) => {
          if (el == props.currentPage) {
            return (
              <span className={[classes.selectedPage, classes.page].join(' ')}>
                {el}
              </span>
            );
          } else {
            return (
              <span
                className={classes.page}
                onClick={(e) => props.changePage(el)}
              >
                {el}
              </span>
            );
          }
        })}
      </div>
      {props.users.map((el) => {
        return (
          <div key={el.id} className={classes.userWrapper}>
            <div className={classes.user}>
              <span>
                <div>
                  <img
                    src={el.photos.small != null ? el.photos.small : userPhoto}
                    alt="ava"
                    className={classes.img}
                  />
                </div>
                <div>
                  {el.followed ? (
                    <button onClick={() => props.unfollow(el.id)}>
                      Unfollow
                    </button>
                  ) : (
                    <button onClick={() => props.follow(el.id)}>Follow</button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{el.name}</div>
                  <div>{el.status}</div>
                </span>
                <span>
                  <div>{'el.location.country'}</div>
                  <div>{'el.location.city'}</div>
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
