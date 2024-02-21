import { Router, Request, Response } from 'express';

export class WebRouter {
  constructor(private readonly router: Router) {}

  get routes(): Router {
    this.router.get('/create', (req: Request, res: Response) =>
      res.send('create')
    );
    this.router.get('/getBlogs', (req: Request, res: Response) =>
      res.send('getBlogs')
    );

    return this.router;
  }
}
