import axios from "axios";

const API_KEY = "4fb0c0c3-a96e-4b5b-b940-2dbd05ad8ef1";
// Да, я знаю что этот файл нужно заигнорить через гит, в рамках учебного проекта оставляю

export const getUsers = (pageNumber = 1) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?count=100&page=${pageNumber}`,
    {
      withCredentials: true,
    }
  );
};

export const follow = (userId) => {
  return axios.post(
    "https://social-network.samuraijs.com/api/1.0/follow/" + userId,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": API_KEY,
      },
    }
  );
};

export const unFollow = (userId) => {
  return axios.delete(
    "https://social-network.samuraijs.com/api/1.0/follow/" + userId,
    {},
    {
      withCredentials: true,
      headers: {
        "API-KEY": API_KEY,
      },
    }
  );
};
