import { createSelector } from "reselect";


/// users

export const usersGet = state => state.users.users;
export const totalCountSL = state => state.users.totalCount;
export const usersPerPageSL = state => state.users.usersPerPage;
export const amountOfPagesSL = state => state.users.amountOfPages;
export const currentPageSL = state => state.users.currentPage;
export const currentPageUsersSL = state => state.users.currentPageUsers;
export const showLoaderSL = state => state.users.showLoader;
export const followingInProgressIDSL = state => state.users.followingInProgressID;

export const usersGetSuperSL =  createSelector( usersGet, showLoaderSL , (users, showLoader) => {
  if (showLoader){ return users.filter(el=>true); }
})

/// app

export const userIdSL = state => state.app.userId;
export const userStatusSL = state => state.app.userStatus;

/// auth

export const authStatusSL = state => state.auth.authStatus;
export const isAuthSL = state => state.auth.isAuth;
export const authDataSL = state => state.auth.authData;

/// profile

export const profileInfoSL = state => state.profilePage.profileInfo;
export const profileStatusSL = state => state.profilePage.status;
export const profilePostsDataSL = state => state.profilePage.postsData;


/// sidebar

export const sidebarFriendsSL = state => state.sidebarPage.friends;
export const sidebarLinksSL = state => state.sidebarPage.links;