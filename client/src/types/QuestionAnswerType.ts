export interface Board {
    id: number;
    nickname: string;
    content: string;
    voteScore?: number;
    createdAt: string;
    modifiedAt: string;
}

export interface Question extends Board{
    title : string;
    views : number;
}

export interface QuestionData extends Question{
    answers: Array<Board>;
    comments: Array<Board>;
}