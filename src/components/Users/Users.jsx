import classes from "./Users.module.css";
import userPhoto from "./../../assets/images/cheems.jpg";
import React from "react";
import { NavLink } from "react-router-dom";


class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.getUsersThunkCreator();
    this.setCurrentPage({target: {textContent : null}}, 1);
  }

  getAmountOfUsers() {
    this.props.getUsersThunkCreator()
      .then((data) => this.props.setUsersAmount(data.totalCount));
  }

  getAmountOfPages() {
    let usersPerPage = this.props.usersPerPage;
    let totalCount = this.props.totalCount;
    let amountOfPages = ~~(totalCount / usersPerPage);
    this.props.setPagesAmount(amountOfPages);
  }

  setCurrentPage(e, pageNumber = 0) {
    this.props.setCurrentPageThunkCreator(e, pageNumber = 0);
  }

  renderLoader() {
    if (this.props.showLoader) {
      return (
        <img
          className={classes.loader}
          src="https://cdn.dribbble.com/users/723160/screenshots/6201614/liquid-loading.gif"
          alt="LOL"
        />
      );
    }
  }

  renderPage() {
    if (this.props.showLoader === false) {
      return (
        <div>
          {this.props.currentPageUsers.map((el) => {
            return (
              <div key={el.id} className={classes.userWrapper}>
                <div className={classes.user}>
                  <span>
                    <div>
                      <NavLink to={"/profile/" + el.id}>
                        <img
                          src={
                            el.photos.small != null
                              ? el.photos.small
                              : userPhoto
                          }
                          alt="ava"
                          className={classes.img}
                        />
                      </NavLink>
                    </div>

                    <div>
                      {el.followed ? (
                        <button

                          disabled={this.props.followingInProgressID === el.id}

                          onClick={() => {
                            //
                            this.props.unfollowThunkCreator(el.id);
                          }}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <div>
                          <h1>
                            {
                              this.props.followingInProgressBool ?
                                "LOL DA" : "LOL NET"
                            }
                          </h1>
                        <button
                          disabled={this.props.followingInProgressID === el.id}
                          onClick={() => {
                            this.props.followThunkCreator(el.id)
                          }}
                        >
                          Follow
                        </button>
                        </div>
                      
                      )}
                    </div>
                  </span>
                  <span>
                    <span>
                      <div>{el.name}</div>
                      <div>{el.status}</div>
                    </span>
                    <span>
                      <div>{"el.location.country"}</div>
                      <div>{"el.location.city"}</div>
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.amountOfPages.map((el) => {
            if (el == this.props.currentPage) {
              return (
                <span
                  className={[classes.selectedPage, classes.page].join(" ")}
                >
                  {el}
                </span>
              );
            } else {
              return (
                <span
                  onClick={(e) => this.setCurrentPage(e)}
                  className={classes.page}
                >
                  {el}
                </span>
              );
            }
          })}
        </div>

        <div>{this.renderLoader()}</div>
        <div>{this.renderPage()}</div>
      </div>
    );
  }
}

export default Users;
