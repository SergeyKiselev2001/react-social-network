import { connect } from 'react-redux';
import {
  changePageAC,

  followAC,
  setFetchingAC,
  setTotalCountUsersAC,
  setUsersAC,
  toggleFetchingAC,
  unfollowAC,
} from '../../redux/usersReduser';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import loader from './../../assets/gifs/loader.gif'

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    this.getUsers();
    
  }

  changePage(pageNumber) {
    this.props.changePage(pageNumber);
    this.props.setFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((req) => {
          this.props.setUsers(req.data.items);
          this.props.setFetching(false)
        });
  }

  getUsers() {
    if (this.props.users.length == 0) {
        this.props.setFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
        )
        .then((req) => {
          this.props.setUsers(req.data.items);
          this.props.setTotal(req.data.totalCount);
          this.props.setFetching(false)
        });
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <img src={loader} /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          changePage={this.changePage.bind(this)}
          isFetching={this.props.isFetching}
          
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unfollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    changePage: (page) => dispatch(changePageAC(page)),
    setTotal: (total) => dispatch(setTotalCountUsersAC(total)),
    setFetching: (current) => dispatch(setFetchingAC(current))
  };
};

export let UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);
