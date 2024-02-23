import { Request, Response } from 'express';
import { BindMethods } from '@common/decorators';
import { UserService } from './user.service';

@BindMethods
export class UserController {
  constructor(private readonly userService: UserService) {}

  async update(req: Request, res: Response) {
    res.send(await this.userService.update(req.body));
  }

  async delete(req: Request, res: Response) {
    const { userId } = req.params;
    res.send(await this.userService.delete({ userId }));
  }
}
