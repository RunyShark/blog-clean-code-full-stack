import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { BindMethods } from '@common/decorators/BindMethods';

@BindMethods
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  async login(req: Request, res: Response) {
    const result = await this.authService.login();

    res.send(result);
  }

  async register(req: Request, res: Response) {
    const result = await this.authService.register();
    res.send(result);
  }

  async refreshToken(req: Request, res: Response) {
    const result = await this.authService.refreshToken();
    res.send(result);
  }

  async resetpassword(req: Request, res: Response) {
    const result = await this.authService.resetpassword();
    res.send(result);
  }
}
