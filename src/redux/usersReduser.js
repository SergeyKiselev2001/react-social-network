


let initialState = {
    users : [
        {id: 1, photoURL: 'https://moirody.ru/wp-content/uploads/2019/09/67629845_457571054839268_1640374509175275848_n.jpg', followed: true,  fullName: 'Sergey_BOSS', status: 'I am a BOSS!!!', location: {city: 'Lubersty', country: 'Russia'}},
        {id: 2, photoURL: 'https://images11.cosmopolitan.ru/upload/img_cache/5fd/5fd7936b8b3e3701f9291ffaffb033cb_ce_1080x865x0x0_cropped_1080x565.jpg', followed: false,  fullName: 'Andrew', status: 'I like warface', location: {city: 'Lubersty', country: 'Russia'}},
        {id: 3, photoURL: 'https://moe-lipetsk.ru/media_new/8/4/9/6/2/0/material_1046609/original_photo-thumb_1920.jpg', followed: true,  fullName: 'Alex', status: 'Grizzly corp', location: {city: 'Lubersty', country: 'Russia'}},
        {id: 4, photoURL: 'https://pbs.twimg.com/media/EoQpK2SXUAUP_r3.jpg', followed: false,  fullName: 'Vladimir', status: 'MEI', location: {city: 'Moscow', country: 'Russia'}},
    ]
}

export let usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(el=>{
                    if (el.id == action.userId){
                        return {...el, followed: true}
                    } 
                    return el;
                })
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(el=>{
                    if (el.id == action.userId){
                        return {...el, followed: false}
                    } 
                    return el;
                })
            }
        case "SET_USERS":

            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }

}

export const followAC = (userId) => ({type:"FOLLOW",userId:userId});
export const unfollowAC = (userId) => ({type:"UNFOLLOW",userId:userId});
export const setUsersAC = (users) => ({type: "SET_USERS", users: users});