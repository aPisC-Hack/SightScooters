import KoaCors from '@koa/cors';
import Koa, { Context, Request, Response } from 'koa';
import KoaBodyparser from 'koa-bodyparser';
import KoaCompress from 'koa-compress';
import KoaHelmet from 'koa-helmet';
import KoaLogger from 'koa-logger';
import { CatchError, LoadApiDirectory } from './utils/middlewares';

export interface ServerContext<TRequestBody = any, TResponseBody = any> extends Context {
  request: ServerRequest<TRequestBody>;
  response: ServerResponse<TResponseBody>;
  body: TResponseBody;
  state: ServerState;
}

interface ServerRequest<RequestBody = any> extends Request {
  body?: RequestBody;
}

interface ServerResponse<ResponseBody = any> extends Response {
  body: ResponseBody;
}

export interface ServerState {
  name: string;
}

export async function bootstrap(): Promise<Koa<ServerState, ServerContext>> {
  const isDevelopment = true;

  const server = new Koa<ServerState, ServerContext>();

  const middlewares: (Koa.Middleware<any, any> | null)[] = [
    isDevelopment ? KoaLogger() : null,
    CatchError,
    KoaHelmet(),
    KoaCompress() as (ctx: ServerContext, next: Koa.Next) => Promise<any>,
    KoaCors() as (ctx: ServerContext, next: Koa.Next) => Promise<any>,
    KoaBodyparser({}),
    LoadApiDirectory({ path: __dirname + '/api' }),
  ];

  middlewares.filter((m) => !!m).forEach((m) => server.use(m as Koa.Middleware));

  return server;
}
