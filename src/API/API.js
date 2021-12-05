import axios from "axios";

const API_KEY = "4fb0c0c3-a96e-4b5b-b940-2dbd05ad8ef1";
const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
// Да, я знаю что этот файл нужно заигнорить через гит, но в рамках учебного проекта оставляю его открытым

export const getUsers = (pageNumber = 1) => {
  return axios.get( BASE_URL + "users?count=100&page=" + pageNumber,
    {
      withCredentials: true,
    }
  ).then((res)=>res.data);
};

export const follow = (userId) => {
  return axios.post( BASE_URL + "follow/" + userId,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": API_KEY,
      },
    }
  ).then((res)=>res.data);
};

export const unFollow = (userId) => {
  return axios.delete( BASE_URL + "follow/" + userId,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": API_KEY,
      },
    }
  ).then((res)=>res.data);
};


export const authMe = () => {
    return axios.get( BASE_URL + "auth/me", {
            withCredentials : true
    }).then((res)=>res.data);
}