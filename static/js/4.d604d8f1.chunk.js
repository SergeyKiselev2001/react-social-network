(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{340:function(e,s,t){e.exports={userWrapper:"Users_userWrapper__3rC79",user:"Users_user__3EJE4",img:"Users_img__37i-1",selectedPage:"Users_selectedPage__z6EjZ",loader:"Users_loader__3298z",pagination:"Users_pagination__gekXc",page:"Users_page__3oS4Y",active_page:"Users_active_page__1pOFA",search:"Users_search__3Ybta"}},344:function(e,s,t){"use strict";t.r(s);var r=t(7),a=t(28),n=t(8),i=t(127),o=t(89),c=t(20),l=t(21),u=t(23),p=t(22),g=t(340),d=t.n(g),h=t(91),j=t(1),b=t.n(j),O=t(0),P=function(e){Object(u.a)(t,e);var s=Object(p.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=s.call(this,e)).plusOnePage=function(){var e=r.props.amountOfPages[r.props.amountOfPages.length-1];r.props.visiblePages[9]+1<e&&r.setVisiblePages(r.props.visiblePages.map((function(e){return e+1})))},r.minusOnePage=function(){var e=r.props.amountOfPages[0];r.props.visiblePages[0]>e&&r.setVisiblePages(r.props.visiblePages.map((function(e){return e-1})))},r.toLastPage=function(){for(var e=r.props.amountOfPages[r.props.amountOfPages.length-1],s=[],t=9;t>0;t--)s.push(e-t);s.push(e),r.setVisiblePages(s)},r.toFirstPage=function(){r.setVisiblePages([1,2,3,4,5,6,7,8,9,10])},r}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(),this.setCurrentPage({target:{textContent:null}},this.props.currentPage),this.setVisiblePages([1,2,3,4,5,6,7,8,9,10])}},{key:"getAmountOfUsers",value:function(){var e=this;this.props.getUsersThunkCreator().then((function(s){return e.props.setUsersAmount(s.totalCount)}))}},{key:"getAmountOfPages",value:function(){var e=this.props.usersPerPage,s=~~(this.props.totalCount/e);this.props.setPagesAmount(s)}},{key:"setVisiblePages",value:function(e){this.props.setVisiblePagesAC(e)}},{key:"setCurrentPage",value:function(e){this.props.setCurrentPageThunkCreator(e)}},{key:"renderLoader",value:function(){if(this.props.showLoader)return Object(O.jsx)("img",{className:d.a.loader,src:"https://cdn.dribbble.com/users/723160/screenshots/6201614/liquid-loading.gif",alt:"LOL"})}},{key:"renderPage",value:function(){var e=this;if(!1===this.props.showLoader)return Object(O.jsx)("div",{children:this.props.currentPageUsers.map((function(s){return Object(O.jsx)("div",{className:d.a.userWrapper,children:Object(O.jsxs)("div",{className:d.a.user,children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"#/profile/"+s.id,target:"_blank",children:Object(O.jsx)("img",{src:null!=s.photos.small?s.photos.small:h.a,alt:"ava",className:d.a.img})})}),Object(O.jsx)("div",{children:s.followed?Object(O.jsx)("button",{disabled:e.props.followingInProgressID===s.id,onClick:function(){e.props.unfollowThunkCreator(s.id)},children:"Unfollow"}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:e.props.followingInProgressBool?"LOL DA":"LOL NET"}),Object(O.jsx)("button",{disabled:e.props.followingInProgressID===s.id,onClick:function(){e.props.followThunkCreator(s.id)},children:"Follow"})]})})]}),Object(O.jsxs)("span",{children:[Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:s.name}),Object(O.jsx)("div",{children:s.status})]}),Object(O.jsxs)("span",{children:[Object(O.jsx)("div",{children:"el.location.country"}),Object(O.jsx)("div",{children:"el.location.city"})]})]})]})},s.id)}))})}},{key:"renderPages",value:function(){var e=this;return this.props.visiblePages.map((function(s){return e.props.currentPage==s?Object(O.jsx)("div",{className:d.a.page+" "+d.a.active_page,children:s}):e.props.currentPage!=s?Object(O.jsx)("div",{onClick:function(){return e.setCurrentPage(s)},className:d.a.page,children:s}):void 0}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:d.a.pagination,children:[Object(O.jsx)("input",{type:"text",className:d.a.search}),Object(O.jsx)("div",{onClick:this.toFirstPage,className:d.a.page,children:"<<"}),Object(O.jsx)("div",{onClick:this.minusOnePage,className:d.a.page,children:"<"}),this.renderPages(),Object(O.jsx)("div",{onClick:this.plusOnePage,className:d.a.page,children:">"}),Object(O.jsx)("div",{onClick:this.toLastPage,className:d.a.page,children:">>"})]}),Object(O.jsx)("div",{children:this.renderLoader()}),Object(O.jsx)("div",{children:this.renderPage()})]})}}]),t}(b.a.Component);s.default=Object(a.compose)(Object(r.connect)((function(e){return{users:Object(n.q)(e),totalCount:Object(n.n)(e),usersPerPage:Object(n.r)(e),amountOfPages:Object(n.a)(e),currentPage:Object(n.d)(e),currentPageUsers:Object(n.e)(e),showLoader:Object(n.k)(e),followingInProgressID:Object(n.f)(e),visiblePages:Object(n.s)(e)}}),{setUsers:i.g,setUsersAmount:i.h,setPagesAmount:i.f,setCurrentPage:i.c,setCurrentPageUsers:i.e,shouldShowLoader:i.j,setVisiblePagesAC:i.i,getUsersThunkCreator:i.b,setCurrentPageThunkCreator:i.d,followThunkCreator:i.a,unfollowThunkCreator:i.k}),o.a)(P)}}]);
//# sourceMappingURL=4.d604d8f1.chunk.js.map