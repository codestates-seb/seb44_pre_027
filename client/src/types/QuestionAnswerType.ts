export interface QAC_DefaultData {
    nickname: string;
    content: string;
    voteScore?: number;
    createdAt: string;
    modifiedAt: string;
};

export interface Question extends QAC_DefaultData{
    questionId: number;
    title : string;
    views : number;
};

export interface Answer extends QAC_DefaultData{
    answerId: number;
};

export interface Comment extends QAC_DefaultData{
    commentId: number;
};


export interface QuestionData extends Question{
    answers: Array<Answer>;
    comments: Array<Comment>;
}