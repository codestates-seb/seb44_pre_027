import { todos, users, data, questions, comments, answers } from './data';
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
    questions.push(await req.json());
    return res(
      ctx.status(201),
      ctx.json({
      questionId: Math.floor(Math.random()*100)
      })
    );
  }),
  rest.delete(`/questions/:questionId`, (req, res, ctx)=>{
    const questionId = Number(req.params.questionId);
    questions.splice(questionId-1, 1);
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
];

const hyejinHandlers: DahamType = [];

export const handlers = dahamHandlers
  .concat(giljongHandlers)
  .concat(hyejinHandlers)
  .concat(typeProvider);
