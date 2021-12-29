import profileReduser, { addPostAC, deletePostAC } from "./profileReduser";



 // Подготовим исходные данные
 let initialState = {

  postsData: [
    { id: 1, likesCount: 34, msg: "ПРИВЕТ" },
    { id: 2, likesCount: 63, msg: "тестовый пост 2" },
    { id: 3, likesCount: 27, msg: "Yo" },
    { id: 4, likesCount: 12, msg: "пост 4" },
  ],
};


test('length of posts should be incremented', ()=>{

  let action = addPostAC("it-kamasutra.com");
  // создаем action
  let newState = profileReduser(initialState, action)
  // ожидание
  expect(newState.postsData.length).toBe(5);
});

test('msg should be equal to argument in action', ()=>{
  let action = addPostAC("it-kamasutra.com");
  let newState = profileReduser(initialState, action)
  expect(newState.postsData[4].msg).toBe("it-kamasutra.com");
});

test('length of posts should be decremented', ()=>{
  let action = deletePostAC(0);
  let newState = profileReduser(initialState, action)
  expect(newState.postsData.length).toBe(3);
});

test('length of posts shouldnt be changed if argument is out of array range', ()=>{
  let action = deletePostAC(100000000);
  let newState = profileReduser(initialState, action)
  expect(newState.postsData.length).toBe(4);
});