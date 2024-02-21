import {
  CreateUserDto,
  LoginUserDto,
  RefreshTokenUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { ApiResponse } from '@domain/rules';
import { Request, Response } from 'express';

export class AuthService {
  async login(loginUserDto: LoginUserDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }

  async register(createUserDto: CreateUserDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }

  async refreshToken(RefreshTokenUserDto: RefreshTokenUserDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }

  async resetpassword(resetPasswordUserDto: ResetPasswordUserDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }
}
