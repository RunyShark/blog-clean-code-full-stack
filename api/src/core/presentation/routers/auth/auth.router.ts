import { Router, Request, Response } from 'express';

export class AuthRouter {
  constructor(private readonly router: Router) {}

  get routes(): Router {
    this.router.get('/register', (req: Request, res: Response) =>
      res.send('register')
    );
    this.router.get('/login', (req: Request, res: Response) =>
      res.send('login')
    );
    this.router.get('/refreshToken', (req: Request, res: Response) =>
      res.send('refreshToken')
    );
    this.router.get('/resetpassword', (req: Request, res: Response) =>
      res.send('resetpassword')
    );

    return this.router;
  }
}
