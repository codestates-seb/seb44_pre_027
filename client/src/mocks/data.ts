export interface UserType {
  email: string;
  password: string;
  nickname: string;
  userid: number;
}

export const answers =  [
  {
    answerId : 1,
    content : "Example Answer",
    nickname : "Helper",
    voteScore: 12,
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12",
  },
  {
    answerId : 2,
    content : "Example Answer2",
    nickname : "Helper2",
    voteScore: 6,
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12",
  }
];

export const comments = [
  {
    questionId: 1,
    commentId : 1,
    nickname: 'Commenter',
    content : "example comment1",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 2,
    nickname: 'Commenter',
    content : "example comment2",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 3,
    nickname: 'Commenter',
    content : "example comment3",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 4,
    nickname: 'Commenter',
    content : "example comment4",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 5,
    nickname: 'Commenter',
    content : "example comment5",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 6,
    nickname: 'Commenter',
    content : "example comment6",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  },
  {
    questionId: 1,
    commentId : 7,
    nickname: 'Commenter',
    content : "example comment7",
    createdAt : "2000-06-20 06:12:13",
    modifiedAt : "2000-06-21 07:11:12"
  }
]

export const question = {
  questionId : 1,
  nickname : "Kim-DaHam",
  title : "Example Title",
  content : "Example Content",
  createdAt : "2000-06-20 06:12:13",
  modifiedAt : "2000-06-21 07:11:12",
  views : 48,
  voteScore : 7,
  answers: answers,
  comments: comments
};

export const todos = ['다함', '님이', '다함'];

export const users: UserType[] = [];

export const data = [];

/* Questions */
export const questions = [];

/* Tags */
export const tags = ['javascript', 'css', 'java', 'jquery', 'c++', 'c#', 'react', 'react-query', 'react-dom', 'react-redux', 'redux'];