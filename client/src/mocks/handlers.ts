import { todos, users, data, questions, comments, answers, searchData } from './data';
import UserSetting from '@/components/userinfo/UserSetting';
import { UserSettingType, homeinquiry, userinquiry } from './homeinquiry';
import { rest } from 'msw';
import { NONAME } from 'dns';

const typeProvider = [
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post('/todos', async (req, res, ctx) => {
    todos.push(await req.json());
    return res(ctx.status(201));
  }),
];

type DahamType = typeof typeProvider;

const dahamHandlers: DahamType = [
  rest.get(`/questions/:questionId`, (req, res, ctx)=>{
    const questionId = Number(req.params.questionId);
    const filterQuestion:any = questions.filter((q)=>q.questionId === questionId);
    return res(ctx.status(200), ctx.json(filterQuestion[0]));
  }),
  rest.post('/questions', async(req, res, ctx)=>{
    const questionId = Math.floor(Math.random()*100);
    const body = await req.json();
    const newQuestion = {
      questionId: questionId,
      nickname: 'noname',
      title: String(body.content),
      content: String(body.title),
      createdAt: String(new Date()),
      modifiedAt: '',
      views: 0,
      voteScore: 0,
      answers:[],
      comments:[]
    }
    questions.push(newQuestion);
    return res(
      ctx.status(201),
      ctx.json({
        questionId: questionId
      })
    );
  }),
  rest.delete(`/questions/:questionId`, (req, res, ctx)=>{
    const questionId = Number(req.params.questionId);
    questions.splice(questionId-1, 1);
    return res(ctx.status(200));
  }),
  rest.post('/questions/:questionId/answers', async (req, res, ctx)=>{
    const newAnswer = {
      answerId: answers.length+1,
      questionId: Number(req.params.questionId),
      nickname: 'noname',
      voteScore: 0,
      content: (await req.json()).content.answer,
      createdAt: String(new Date()),
      modifiedAt: String(new Date())
    }
    answers.push(newAnswer);
    return res(ctx.status(200));
  }),
  rest.delete(`/questions/:questionId/answers/:answerId`, (req, res, ctx)=>{
    const answerId = Number(req.params.answerId);
    answers.splice(answerId-1, 1);
    return res(ctx.status(200));
  }),
  rest.post(`/questions/:questionId/comments`, async (req, res, ctx)=>{
    const questionId = Number(req.params.questionId);
    const newComment = {
      content: (await req.json()).content.comment,
      questionId: questionId,
      commentId: comments.length+1,
      nickname: 'NONAME',
      createdAt: String(new Date()),
      modifiedAt: String(new Date())
    }
    comments.push(newComment);
    return res(ctx.status(200));
  }),
  rest.patch(`/questions/:questionId/comments/:commentId`, async (req, res, ctx)=>{
    const commentId = Number(req.params.commentId);
    const newComment = {
      content: (await req.json()).content.comment,
      modifiedAt: String(new Date())
    }
    comments.map((comment)=>{
      if(comment.commentId === commentId)
        Object.assign(comment, newComment);
    })
    return res(ctx.status(200));
  }),
  rest.delete(`/questions/:questionId/comments/:commentId`, (req, res, ctx)=>{
    const commentId = Number(req.params.commentId);
    comments.splice(commentId-1, 1);
    return res(ctx.status(200));
  }),
  rest.post('/questions/:questionId/votes', async (req, res, ctx)=>{
    const status = req.url.searchParams.get('status');
    const questionId = Number(req.params.questionId);
    questions.map(question => {
      if(question.questionId === questionId){
        if(status === 'good') question.voteScore++;
        if(status === 'bad') question.voteScore--;
      }
    })
    return res(ctx.status(200));
  }),
];

const giljongHandlers: DahamType = [
  rest.post('/users/signup', async (req, res, ctx) => {
    const newUser = await req.json();
    const validation = users.findIndex((user) => user.email === newUser.email);

    if (validation !== -1) {
      return res(ctx.status(400), ctx.json('이미 가입한 이메일입니다.'));
    } else {
      newUser.userid = Number(new Date());
      users.push(newUser);
      return res(ctx.status(201), ctx.json('signup successful'));
    }
  }),
  rest.post('/users/login', async (req, res, ctx) => {
    const accessToken = 'dummy-access-token';

    const loginUser = await req.json();
    const validation = users.findIndex(
      (user) => user.email === loginUser.email && user.password === loginUser.password
    );

    if (validation === -1) {
      return res(ctx.status(400), ctx.json('login failed'));
    } else {
      return res(
        ctx.status(200),
        ctx.json('login successful'),
        ctx.set('authorization', `Bearer ${accessToken}`)
      );
    }
  }),
  rest.get('/users/logout', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json('logout successful'));
  }),
  rest.patch('/questions/:questionid', (req, res, ctx) => {
    const { questionid } = req.params;
    return res(ctx.status(200), ctx.json('we patched your request'));
  }),
  rest.patch('/questions/:questionid/answers/:answerid', (req, res, ctx) => {
    const { questionid, answerid } = req.params;
    return res(ctx.status(200), ctx.json('we patched your request'));
  }),
];

const hyejinHandlers: DahamType = [
  rest.get('/searchbar', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(searchData));
  }),
  rest.get('/questions', (req, res, ctx) => {
    const page = req.url.searchParams.get('page')
    const sort = req.url.searchParams.get('sort')
    return res(
      ctx.json({
        data:homeinquiry,
        page,
        sort,
      }),
    )
  }),
  rest.get('/users/:id', (req, res, ctx) => {
    const userId = Number(req.params.id)
    return res(
      ctx.json({
        data:userinquiry,
        userId,
      }),
    )
  }),
  rest.patch('/users/:id', (req, res,ctx) => {
    const userId = Number(req.params.id);


    return res(ctx.json({
      data:userinquiry,
    }));
  }),
  rest.delete('/users/:id', (req,res,ctx) => {
    const userId = Number(req.params.id);

    return res(ctx.status(200));
  })

];

export const handlers = dahamHandlers
  .concat(giljongHandlers)
  .concat(hyejinHandlers)
  .concat(typeProvider);
