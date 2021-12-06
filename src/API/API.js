import axios from "axios";

const API_KEY = "4fb0c0c3-a96e-4b5b-b940-2dbd05ad8ef1";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
// Да, я знаю что этот файл нужно заигнорить через гит, но в рамках учебного проекта оставляю его открытым


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
    }
}

export const profileAPI = {
    getProfileInfo(id){
        return axios.get(BASE_URL + 'profile/'+ id)
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