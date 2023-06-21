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
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597",
  },
  {
    answerId : 2,
    content : "Example Answer2",
    nickname : "Helper2",
    voteScore: 6,
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597",
  }
];

export const comments = [
  {
    questionId: 1,
    commentId : 1,
    nickname: 'Commenter',
    content : "example comment1",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 2,
    nickname: 'Commenter',
    content : "example comment2",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 3,
    nickname: 'Commenter',
    content : "example comment3",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 4,
    nickname: 'Commenter',
    content : "example comment4",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 5,
    nickname: 'Commenter',
    content : "example comment5",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 6,
    nickname: 'Commenter',
    content : "example comment6",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  },
  {
    questionId: 1,
    commentId : 7,
    nickname: 'Commenter',
    content : "example comment7",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597"
  }
]

export const todos = ['다함', '님이', '다함'];

export const users: UserType[] = [];

export const data = [];

/* Questions */
export const questions = [
  {
    questionId : 1,
    nickname : "Kim-DaHam1",
    title : "Example Title",
    content : "Example Content",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597",
    views : 48,
    voteScore : 7,
    answers: answers,
    comments: comments
  },
  {
    questionId : 2,
    nickname : "Kim-DaHam2",
    title : "Example Title2",
    content : "Example Content",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597",
    views : 48,
    voteScore : 7,
    answers: answers,
    comments: comments
  },
  {
    questionId : 3,
    nickname : "Kim-DaHam3",
    title : "Example Title3",
    content : "Example Content",
    createdAt : "2023-06-21T17:34:51.3395597",
    modifiedAt : "2023-06-21T17:34:51.3395597",
    views : 48,
    voteScore : 7,
    answers: answers,
    comments: comments
  },
];

/* Tags */
export const tags = ['javascript', 'css', 'java', 'jquery', 'c++', 'c#', 'react', 'react-query', 'react-dom', 'react-redux', 'redux'];