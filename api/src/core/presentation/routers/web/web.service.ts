import { Request, Response } from 'express';

export class WebService {
  async create(req: Request, res: Response) {
    return 'create';
  }

  async getBlogs(req: Request, res: Response) {
    return 'getBlogs';
  }
}
