import { Response, Request } from 'express';

export type Handler = (req: Request, res: Response) => any;
export type ExpressController = {
  get?: Handler;
  post?: Handler;
  put?: Handler;
  delete?: Handler;
  patch?: Handler;
  [method: string]: Handler;
};
