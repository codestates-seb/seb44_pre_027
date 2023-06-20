export interface UserType {
  email: string;
  password: string;
  nickname: string;
  userid: number;
}

export const question = {
  questionId : "1",
  nickname : "Kim-DaHam",
  title : "Example Title",
  content : "Example Content",
  createdAt : "2000-06-20 06:12:13",
  modifiedAt : "2000-06-21 07:11:12",
  views : 48,
  voteScore : 7,
  answers: [
    {
      answerId : "1",
      content : "Example Answer",
      nickname : "Helper",
      voteScore: 12,
      createdAt : "2000-06-20 06:12:13",
      modifiedAt : "2000-06-21 07:11:12",
    },
    {
      answerId : "2",
      content : "Example Answer2",
      nickname : "Helper2",
      voteScore: 6,
      createdAt : "2000-06-20 06:12:13",
      modifiedAt : "2000-06-21 07:11:12",
    }
  ],
  comments: [
    {
      id : "1",
      nickname: 'Commenter',
      content : "example comment",
      createdAt : "2000-06-20 06:12:13",
      modifiedAt : "2000-06-21 07:11:12"
    },
    {
      id : "2",
      nickname: 'Commenter',
      content : "example comment2",
      createdAt : "2000-06-20 06:12:13",
      modifiedAt : "2000-06-21 07:11:12"
    }
  ]
};

export const todos = ['다함', '님이', '다함'];

export const users: UserType[] = [];

export const data = [];
