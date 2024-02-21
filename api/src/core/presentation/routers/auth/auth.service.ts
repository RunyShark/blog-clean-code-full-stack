import { Request, Response } from 'express';

export class AuthService {
  async login() {
    return 'login';
  }

  async register() {
    return 'register';
  }

  async refreshToken() {
    return 'refreshToken';
  }

  async resetpassword() {
    return 'resetpassword';
  }
}
