import {
  CreateUserDto,
  LoginUserDto,
  RefreshTokenUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { AuthRepository } from '@domain/repositories';
import { ApiResponse } from '@domain/rules';

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

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
