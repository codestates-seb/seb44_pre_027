import { todos } from './data';
import { rest } from 'msw';

const dahamHandlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post('/todos', async (req, res, ctx) => {
    todos.push(await req.json());
    return res(ctx.status(201));
  }),
];

type DahamType = typeof dahamHandlers;

const giljongHandlers: DahamType = [];

const hyejinHandlers: DahamType = [];

export const handlers = dahamHandlers.concat(giljongHandlers).concat(hyejinHandlers);
