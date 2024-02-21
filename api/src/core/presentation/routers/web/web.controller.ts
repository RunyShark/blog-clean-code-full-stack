import { Request, Response } from 'express';
import { WebService } from './web.service';
import { BindMethods } from '@common/decorators/BindMethods';
@BindMethods
export class WebController {
  constructor(private readonly webService: WebService) {}
  async create(req: Request, res: Response) {
    const result = await this.webService.create(req, res);
    res.send(result);
  }

  async getBlogs(req: Request, res: Response) {
    const result = await this.webService.getBlogs(req, res);
    res.send(result);
  }
}
