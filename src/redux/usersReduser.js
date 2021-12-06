import { usersAPI } from "../API/API";

let initialState = {
  users: [],
  currentPageUsers: [],
  totalCount: 10,
  usersPerPage: 100,
  amountOfPages: [1],
  currentPage: 1,

  showLoader: false,
  followingInProgressID: null,
};

export let usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          } else {
            return el;
          }
        }),
      };

    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };

    case "FOLLOWING_IN_PROGRESS":
      debugger;
      return {
        ...state,
        followingInProgressID: action.followingInProgressID,
      };
    case "SET_USERS":
      return {
        ...state,
        users: [...action.users],
      };

    case "SET_CURRENT_PAGE_USERS":
      return {
        ...state,
        currentPageUsers: [...action.currentPageUsers],
      };

    case "SET_USERS_AMOUNT":
      return {
        ...state,
        totalCount: action.totalCount,
      };

    case "SET_PAGES_AMOUNT":
      let buffer = [];
      for (let i = 1; i < action.amountOfPages + 1; i++) {
        buffer.push(i);
      }

      return {
        ...state,
        amountOfPages: buffer,
      };

    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };

    case "SHOULD_SHOW_LOADER":
      return {
        ...state,
        showLoader: action.shouldShowLoader,
      };

    default:
      return state;
  }
};


// Action Creators

export const follow = (userId) => ({ type: "FOLLOW", userId: userId });
export const unfollow = (userId) => ({ type: "UNFOLLOW", userId: userId });
export const followingInProgress = (id) => ({
  type: "FOLLOWING_IN_PROGRESS",
  followingInProgressID: id,
});

export const setUsers = (users) => ({ type: "SET_USERS", users: users });

export const setCurrentPageUsers = (currentPageUsers) => ({
  type: "SET_CURRENT_PAGE_USERS",
  currentPageUsers: currentPageUsers,
});

export const setUsersAmount = (amount) => ({
  type: "SET_USERS_AMOUNT",
  totalCount: amount,
});
export const setPagesAmount = (amount) => ({
  type: "SET_PAGES_AMOUNT",
  amountOfPages: amount,
});
export const setCurrentPage = (number) => ({
  type: "SET_CURRENT_PAGE",
  currentPage: number,
});

export const shouldShowLoader = (shouldShowLoader) => ({
  type: "SHOULD_SHOW_LOADER",
  shouldShowLoader: shouldShowLoader,
});

// SANKI

export const getUsersThunkCreator = () => {
  return (dispatch) => {
    dispatch(shouldShowLoader(true));

    usersAPI.getUsers().then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setUsersAmount(data.totalCount));

      let usersPerPage = 100;
      let totalCount = data.totalCount;
      let amountOfPages = Math.ceil(totalCount / usersPerPage);

      dispatch(setPagesAmount(amountOfPages));
      dispatch(shouldShowLoader(false));
    });
  };
};

export const setCurrentPageThunkCreator =
  (e, pageNumber = 0) =>
  (dispatch) => {
    dispatch(shouldShowLoader(true));
    dispatch(setCurrentPage(e.target.textContent));
    let page = pageNumber || e.target.textContent;
    usersAPI.getUsers(page).then((data) => {
      dispatch(setCurrentPageUsers(data.items));
      dispatch(shouldShowLoader(false));
    });
};

export const followThunkCreator = (id) => (dispatch) => {
  dispatch(followingInProgress(true));
  usersAPI.follow(id).then((data) => {
    if (data.resultCode === 0) dispatch(follow(id));
    dispatch(followingInProgress(false));
  });
};

export const unfollowThunkCreator = (id) => (dispatch) => {
    usersAPI.unFollow(id).then((data) => {
        if (data.resultCode === 0) dispatch(unfollow(id));
    });
};

