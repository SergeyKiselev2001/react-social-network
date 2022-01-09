import axios from "axios";
import {API_KEY} from './KEYS';

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";

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
        var formData = new FormData();
        formData.append("image", file);

        return axiosInstance.put('profile/photo', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        });
    },

    setSocials(obj, profileInfo){
        const values = {
            userId: profileInfo.userId || 21178,
            lookingForAJob: profileInfo.lookingForAJob || true,
            aboutMe: profileInfo.aboutMe || ' - ',
            lookingForAJobDescription: profileInfo.lookingForAJobDescription || ' - ',
            fullName: profileInfo.fullName || 'Sergey Kiselev',
            contacts: {
                ...obj,
                website: null,
                mainLink: null
            }
        }
        return axiosInstance.put('profile', values);
        
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