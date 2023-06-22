export interface UserType {
  email: string;
  password: string;
  nickname: string;
  userid: number;
  title?: string;
  tag?: string;
}

export const todos = ['다함', '님이', '다함'];

export const users: UserType[] = [];

export const data = [];

export const searchData:UserType[] = [
  {
    userid: 1,
    nickname:"emma",
    email:"cjd191058@naver.com",
    password:"catcatf",
    title:"listening to Object changes ..",
    tag:"javascript",
  },
  {
    userid: 2,
    nickname:"daham",
    email:"daham333@naver.com",
    password:"rere",
    title:"rec-query ..",
    tag:"reactQeury",
  },
  {
    userid: 3,
    nickname:"giljong",
    email:"giljong111@naver.com",
    password:"god",
    title:"why redux-Toolkit does not work?",
    tag:"reduxtookit",
  },
];