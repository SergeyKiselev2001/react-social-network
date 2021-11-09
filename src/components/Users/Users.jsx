
import classes from './Users.module.css';

let Users = (props) => {

    props.setUsers()

    return (
        <div>
            {
                props.users.map((el)=>{return (

                <div key={el.id} className={classes.userWrapper}>
                    <div className={classes.user}>
                    <span>
                        <div>
                            <img src={el.photoURL} alt="ava" className={classes.img}/>
                        </div>
                        <div>
                            {
                                el.followed 
                                ? <button onClick={()=>props.unfollow(el.id)}>Unfollow</button> 
                                : <button  onClick={()=>props.follow(el.id)}>Follow</button>
                            }
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{el.location.country}</div>
                            <div>{el.location.city}</div>
                        </span>
                    </span>
                    </div>
                </div>
                )})
            }

        </div>
    )
}

export default Users;