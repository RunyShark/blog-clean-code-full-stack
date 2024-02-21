import { Request, Response } from 'express';
import { WebService } from './web.service';
import { BindMethods } from '@common/decorators/BindMethods';
import { ApiResponse } from '@domain/rules';
@BindMethods
export class WebController {
  constructor(private readonly webService: WebService) {}
  async create(req: Request, res: Response) {
    res.send(await this.webService.create(req.body));
  }

  async getBlogs(req: Request, res: Response) {
    res.send(await this.webService.getBlogs());
  }
}
