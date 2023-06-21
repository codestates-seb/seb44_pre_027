interface Question {
  questionId: number;
  nickname: string;
  title: string;
  content: string;
  createdAt: string;
  modifiedAt: string;
  views: number;
  voteScore: number;
  answers: Answer[];
  comments: Comment[];
}

interface Answer {
  answerId: number;
  questionId: number;
  content: string;
  memberId: number;
  createdAt: string;
  modifiedAt: string;
}

interface Comment {
  commentId: number;
  content: string;
  memberId: number;
  createdAt: string;
  modifiedAt: string;
}

interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// interface UserInfo {
//   message:string;
// }

export interface HomeInquiryType {
  data: Question[];
  pageInfo?: PageInfo;
}


export const homeinquiry:HomeInquiryType[] = [
    {
        "data" : [ {
          "questionId" : 1,
          "nickname" : "닉네임1",
          "title" : "제목1",
          "content" : "본문1",
          "createdAt" : "2023-06-19T21:04:11.9698321",
          "modifiedAt" : "2023-06-19T21:04:11.9698321",
          "views" : 1,
          "voteScore" : 1,
          "answers" : [ {
            "answerId" : 1,
            "questionId" : 1,
            "content" : "답변1",
            "memberId" : 1,
            "createdAt" : "2023-06-19T21:04:11.9688323",
            "modifiedAt" : "2023-06-19T21:04:11.9688323"
          },{
            "answerId" : 1,
            "questionId" : 1,
            "content" : "답변1",
            "memberId" : 1,
            "createdAt" : "2023-06-19T21:04:11.9688323",
            "modifiedAt" : "2023-06-19T21:04:11.9688323"
          }, ],
          "comments" : [ {
            "commentId" : 1,
            "content" : "댓글",
            "memberId" : 1,
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321"
          } ]
          }, {
            "questionId" : 2,
            "nickname" : "닉네임2",
            "title" : "제목2",
            "content" : "본문2",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 2,
            "voteScore" : 2,
            "answers" : [ {
              "answerId" : 2,
              "questionId" : 2,
              "content" : "답변2",
              "memberId" : 2,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 2,
              "content" : "댓글2",
              "memberId" : 2,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
              "questionId" : 3,
              "nickname" : "닉네임3",
              "title" : "제목3",
              "content" : "본문3",
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321",
              "views" : 3,
              "voteScore" : 3,
              "answers" : [ {
                "answerId" : 3,
                "questionId" : 3,
                "content" : "답변3",
                "memberId" : 3,
                "createdAt" : "2023-06-19T21:04:11.9688323",
                "modifiedAt" : "2023-06-19T21:04:11.9698321"
              } ],
              "comments" : [ {
                "commentId" : 3,
                "content" : "댓글3",
                "memberId" : 3,
                "createdAt" : "2023-06-19T21:04:11.9698321",
                "modifiedAt" : "2023-06-19T21:04:11.9698321"
              } ]
          } , {
            "questionId" : 4,
            "nickname" : "닉네임4",
            "title" : "제목4",
            "content" : "본문4",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 4,
            "voteScore" : 4,
            "answers" : [ {
              "answerId" : 4,
              "questionId" : 4,
              "content" : "답변4",
              "memberId" : 4,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 4,
              "content" : "댓글4",
              "memberId" : 4,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 5,
            "nickname" : "닉네임5",
            "title" : "제목5",
            "content" : "본문5",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 5,
            "voteScore" : 5,
            "answers" : [ {
              "answerId" : 5,
              "questionId" : 5,
              "content" : "답변5",
              "memberId" : 5,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 5,
              "content" : "댓글5",
              "memberId" : 5,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 6,
            "nickname" : "닉네임6",
            "title" : "제목6",
            "content" : "본문6",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 6,
            "voteScore" : 6,
            "answers" : [ {
              "answerId" : 6,
              "questionId" : 6,
              "content" : "답변6",
              "memberId" : 6,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 6,
              "content" : "댓글6",
              "memberId" : 6,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 7,
            "nickname" : "닉네임7",
            "title" : "제목7",
            "content" : "본문7",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 7,
            "voteScore" : 7,
            "answers" : [ {
              "answerId" : 7,
              "questionId" : 7,
              "content" : "답변7",
              "memberId" : 7,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 7,
              "content" : "댓글7",
              "memberId" : 7,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 8,
            "nickname" : "닉네임8",
            "title" : "제목8",
            "content" : "본문8",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 8,
            "voteScore" : 8,
            "answers" : [ {
              "answerId" : 8,
              "questionId" : 8,
              "content" : "답변8",
              "memberId" : 8,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 8,
              "content" : "댓글8",
              "memberId" : 8,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 9,
            "nickname" : "닉네임9",
            "title" : "제목9",
            "content" : "본문9",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 9,
            "voteScore" : 9,
            "answers" : [ {
              "answerId" : 9,
              "questionId" : 9,
              "content" : "답변9",
              "memberId" : 9,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 9,
              "content" : "댓글9",
              "memberId" : 9,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } , {
            "questionId" : 10,
            "nickname" : "닉네임10",
            "title" : "제목10",
            "content" : "본문10",
            "createdAt" : "2023-06-19T21:04:11.9698321",
            "modifiedAt" : "2023-06-19T21:04:11.9698321",
            "views" : 10,
            "voteScore" : 10,
            "answers" : [ {
              "answerId" : 10,
              "questionId" : 10,
              "content" : "답변10",
              "memberId" : 10,
              "createdAt" : "2023-06-19T21:04:11.9688323",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ],
            "comments" : [ {
              "commentId" : 10,
              "content" : "댓글10",
              "memberId" : 10,
              "createdAt" : "2023-06-19T21:04:11.9698321",
              "modifiedAt" : "2023-06-19T21:04:11.9698321"
            } ]
          } 
        ],          
        "pageInfo" : {
          "page" : 1,
          "size" : 5,
          "totalElements" : 2,
          "totalPages" : 1
        }
  }
      
];

