import { todos } from './data';
import { rest } from 'msw';

export const handlers = [
  rest.get('/todos', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  rest.post('/todos', async (req, res, ctx) => {
    todos.push(await req.json());
    return res(ctx.status(201));
  }),
];
