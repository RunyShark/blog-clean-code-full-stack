import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { BindMethods } from '../../../../common/decorators/BindMethods.decorator';

@BindMethods
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  async login(req: Request, res: Response) {
    res.send(await this.authService.login(req.body));
  }

  async register(req: Request, res: Response) {
    res.send(await this.authService.register(req.body));
  }

  async refreshToken(req: Request, res: Response) {
    res.send(await this.authService.refreshToken(req.body));
  }

  async resetpassword(req: Request, res: Response) {
    res.send(await this.authService.resetpassword(req.body));
  }
}
