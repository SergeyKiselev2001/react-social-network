
import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from './../../assets/images/cheems.jpg';
import React from 'react';
import loader from './../../assets/svgs/Spinner.svg';
import { NavLink } from 'react-router-dom';

class Users extends React.Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.props.shouldShowLoader(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=100')
        .then(
            (req)=>{ 

                debugger;
                this.props.setUsers(req.data.items);
                this.props.setUsersAmount(req.data.totalCount);

                let usersPerPage = this.props.usersPerPage;
                let totalCount = this.props.totalCount;
 
                let amountOfPages = (Math.ceil(totalCount / usersPerPage));

                this.props.setPagesAmount(amountOfPages);
                this.props.shouldShowLoader(false);
                }
        );
        this.setCurrentPageUsers(1);
    }

    componentDidUpdate(){
 
    }

    getAmountOfUsers(){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((req)=>this.props.setUsersAmount(req.data.totalCount));
    }

    getAmountOfPages(){
        let usersPerPage = this.props.usersPerPage;
        let totalCount = this.props.totalCount;
        let amountOfPages = ~~(totalCount / usersPerPage);

        
        this.props.setPagesAmount(amountOfPages);

    }

    setCurrentPage(e){
        this.props.shouldShowLoader(true);
        console.log(e.target.textContent);
        this.props.setCurrentPage(e.target.textContent);
        this.setCurrentPageUsers(e.target.textContent);
    }


    setCurrentPageUsers(pageNumber){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=100&page=${pageNumber}`)
            .then((req)=>{
                this.props.setCurrentPageUsers(req.data.items); 
                this.props.shouldShowLoader(false);
            });
    }

    renderLoader(){
        if (this.props.showLoader){
            return (
                <img className={classes.loader} src="https://cdn.dribbble.com/users/723160/screenshots/6201614/liquid-loading.gif" alt="LOL"/>
            )
        }
    }

    renderPage(){
        if (this.props.showLoader==false){

            return (
                
                    <div>
                    {
                    this.props.currentPageUsers.map((el)=>{
                        return ( <div key={el.id} className={classes.userWrapper}>
                                <div className={classes.user}>
                                <span>
                                    
                                    <div>
                                        <NavLink to={'/profile/' + el.id}>
                                        <img src={el.photos.small !=null ? el.photos.small : userPhoto } alt="ava" className={classes.img}/>
                                        </NavLink>
                                    </div>
                                    
                                    <div>
                                        {
                                            el.followed 
                                            ? <button onClick={()=>this.props.unfollow(el.id)}>Unfollow</button> 
                                            : <button  onClick={()=>this.props.follow(el.id)}>Follow</button>
                                        }
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
                        )
                    })
                }
                </div>
            )
        }
    }

    getUsers(){
        if (this.props.users.length==0){
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=1').then((req)=>this.props.setUsers(req.data.items));
        }
    }


    render (){
        return (
            <div>
                <div>
                    {
                        this.props.amountOfPages.map((el) => {
                            if (el == this.props.currentPage){
                                return (<span className={[classes.selectedPage , classes.page].join(" ")} >{el}</span>)
                            } else {
                                return (<span onClick={(e)=>this.setCurrentPage(e)} className={classes.page}>{el}</span>)
                            }
                            
                        })
                    }
                </div>

                <div>
                    {
                        this.renderLoader()
                    }
                </div>
                <div>
                    {
                        this.renderPage()
                    }
                </div>
        </div>
        )
    }
}

export default Users;