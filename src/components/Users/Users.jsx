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
    this.setCurrentPage({target: {textContent : null}}, this.props.currentPage);
    this.setVisiblePages([1,2,3,4,5,6,7,8,9,10]);
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

  setVisiblePages(arr) {
    this.props.setVisiblePagesAC(arr);
  }

  plusOnePage = () => {
    const last = this.props.amountOfPages[this.props.amountOfPages.length - 1];
    if (this.props.visiblePages[9] + 1 < last){
      this.setVisiblePages(this.props.visiblePages.map(el=>el+1));
    }
  }

  minusOnePage = () => {
    const first = this.props.amountOfPages[0];
  
    if (this.props.visiblePages[0] > first){
      this.setVisiblePages(this.props.visiblePages.map(el=>el-1));
    }
  }

  toLastPage = () => {
    let last = this.props.amountOfPages[this.props.amountOfPages.length - 1];
    
    let arr = [];

    for (let i = 9; i > 0; i--){
      arr.push(last - i);
    }
    arr.push(last);
    this.setVisiblePages(arr);
  }

  toFirstPage = () => {
    this.setVisiblePages([1,2,3,4,5,6,7,8,9,10]);
  }

  setCurrentPage(el) {

    this.props.setCurrentPageThunkCreator(el);
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
                      <a href={"#/profile/" + el.id} target="_blank">
                        <img
                          src={
                            el.photos.small != null
                              ? el.photos.small
                              : userPhoto
                          }
                          alt="ava"
                          className={classes.img}
                        />
                      </a>
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

  renderPages(){

    return this.props.visiblePages.map(el=>{

       if (this.props.currentPage == el) {
     
         return (<div className={classes.page + ' ' + classes.active_page}>{el}</div>)
       }

       if (this.props.currentPage != el) {
        return (<div onClick={()=> this.setCurrentPage(el)} className={classes.page}>{el}</div>)
       }
      
    })
    
  }

  render() {
    return (
      <div>

        <div className={classes.pagination}>

          <input type="text" className={classes.search} />

          <div onClick={this.toFirstPage} className={classes.page}>&lt;&lt;</div>
          <div onClick={this.minusOnePage} className={classes.page}>&lt;</div>
          
          {
            this.renderPages()
          }

          <div onClick={this.plusOnePage} className={classes.page}>&gt;</div>
          <div onClick={this.toLastPage} className={classes.page}>&gt;&gt;</div>
        </div>


        <div>{this.renderLoader()}</div>
        <div>{this.renderPage()}</div>
      </div>
    );
  }
}

export default Users;
