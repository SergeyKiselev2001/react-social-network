import axios from "axios";

const API_KEY = "f4483cfc-efef-4572-802e-24fa17f34d79";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
// в рамках учебного проекта оставляю этот файл открытым


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: BASE_URL,
    headers: {
        "API-KEY": API_KEY,
    },
});
 

export const authAPI = {
    authMe(){
        return axiosInstance.get("auth/me").then((res)=>res.data);
    },

    tryToLogin(login, password, rememberMe){
        return axiosInstance.post("auth/login", {
            email: login,
            password : password,
            rememberMe : rememberMe
        }).then((res)=>{
            return res.data;
        })
    },

    logoutMe(){
        return axiosInstance.delete("auth/login")
            .then((res)=>{
                return res.data;
        });
    }
}

export const profileAPI = {
    getProfileInfo(id){
        return axiosInstance.get('profile/'+ id)
    },
    getStatus(id){
        return axiosInstance.get('profile/status/' + id);
    },
    updateStatus(status){
        return axiosInstance.put('profile/status', {status: status});
    },

    setImage(file){
        // not completed
        return axiosInstance.put('profile/photo', {image: file});
    }
}

export const usersAPI = {
    getUsers(pageNumber = 1){
        return axiosInstance.get("users?count=100&page=" + pageNumber).then((res)=>res.data);
    },
    
    follow(userId){
        return axiosInstance.post("follow/" + userId).then((res)=>res.data);
    },

    unFollow(userId){
        return axiosInstance.delete("follow/" + userId).then((res)=>res.data);
    }
}