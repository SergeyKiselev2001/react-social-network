
import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from './../../assets/images/cheems.jpg';
import React from 'react';

class Users extends React.Component {

    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        this.getUsers();
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
                    <span className={classes.page}>1</span>
                    <span className={[classes.selectedPage , classes.page].join(" ")} >2</span>
                    <span className={classes.page}>3</span>
                    <span className={classes.page}>4</span>
                    <span className={classes.page}>5</span>
                </div>
            {
                this.props.users.map((el)=>{return (
                <div key={el.id} className={classes.userWrapper}>
                    <div className={classes.user}>
                    <span>
                        <div>
                            <img src={el.photos.small !=null ? el.photos.small : userPhoto } alt="ava" className={classes.img}/>
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
                )})
            }
        </div>
        )
    }
}

export default Users;