import { todos, users, data } from './data';
import { rest } from 'msw';

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

const dahamHandlers: DahamType = [];

const giljongHandlers: DahamType = [
  rest.post('/users/signup', async (req, res, ctx) => {
    const newUser = await req.json();
    const validation = users.findIndex((user) => user.email === newUser.email);
    const accessToken = 'dummy-access-token';

    if (validation === -1) {
      return res(ctx.status(400), ctx.json('이미 가입한 이메일입니다.'));
    } else {
      newUser.userid = Number(new Date());
      users.push(newUser);
      return res(
        ctx.status(201),
        ctx.json('signup successful'),
        ctx.set('authorization', `Bearer ${accessToken}`)
      );
    }
  }),
  rest.post('/users/login', async (req, res, ctx) => {
    const loginUser = await req.json();
    const validation = users.findIndex(
      (user) => user.email === loginUser.email && user.password === loginUser.password
    );

    if (validation === -1) {
      return res(ctx.status(400), ctx.json('login failed'));
    } else {
      return res(ctx.status(200), ctx.json('login successful'));
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
