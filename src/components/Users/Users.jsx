
import classes from './Users.module.css';
import axios from 'axios';
import userPhoto from './../../assets/images/cheems.jpg';

let Users = (props) => {


    if (props.users.length==0){

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((req)=>props.setUsers(req.data.items));
     
        // props.setUsers([
        //     {id: 1, photoURL: 'https://moirody.ru/wp-content/uploads/2019/09/67629845_457571054839268_1640374509175275848_n.jpg', followed: true,  fullName: 'Sergey_BOSS', status: 'I am a BOSS!!!', location: {city: 'Lubersty', country: 'Russia'}},
        //     {id: 2, photoURL: 'https://images11.cosmopolitan.ru/upload/img_cache/5fd/5fd7936b8b3e3701f9291ffaffb033cb_ce_1080x865x0x0_cropped_1080x565.jpg', followed: false,  fullName: 'Andrew', status: 'I like warface', location: {city: 'Lubersty', country: 'Russia'}},
        //     {id: 3, photoURL: 'https://moe-lipetsk.ru/media_new/8/4/9/6/2/0/material_1046609/original_photo-thumb_1920.jpg', followed: true,  fullName: 'Alex', status: 'Grizzly corp', location: {city: 'Lubersty', country: 'Russia'}},
        //     {id: 4, photoURL: 'https://pbs.twimg.com/media/EoQpK2SXUAUP_r3.jpg', followed: false,  fullName: 'Vladimir', status: 'MEI', location: {city: 'Moscow', country: 'Russia'}},
        // ]);
    }

    return (
        <div>
            {
                props.users.map((el)=>{return (
                <div key={el.id} className={classes.userWrapper}>
                    <div className={classes.user}>
                    <span>
                        <div>
                            <img src={el.photos.small !=null ? el.photos.small : userPhoto } alt="ava" className={classes.img}/>
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

export default Users;