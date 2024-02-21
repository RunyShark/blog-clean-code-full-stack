import {
  CreateUserDto,
  LoginUserDto,
  RefreshTokenUserDto,
  ResetPasswordUserDto,
} from '@domain/dtos/auth';
import { AuthRepository } from '@domain/repositories';
import { ApiResponse } from '@domain/rules';
import {
  CreateUserUseCase,
  LoginUserUseCase,
  ResetPasswordUseCase,
} from '@domain/use-cases';
import { UserResponse } from '@domain/use-cases/interface';

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  private errorHandle<T>(state: number, error: T) {
    return ApiResponse.errorHandle(state, error);
  }

  async login(dto: LoginUserDto) {
    const [error, loginUserDto] = LoginUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new LoginUserUseCase(this.authRepository).execute(
      loginUserDto!
    );

    return ApiResponse.successHandle<UserResponse>(result);
  }

  async register(dto: CreateUserDto) {
    const [error, createUserDto] = CreateUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const newAccount = await new CreateUserUseCase(this.authRepository).execute(
      createUserDto!
    );

    return ApiResponse.successHandle<UserResponse>(newAccount);
  }

  async refreshToken(dto: RefreshTokenUserDto) {
    const [error, refreshTokenUserDto] = RefreshTokenUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const refreshToken = await new CreateUserUseCase(
      this.authRepository
    ).execute(refreshTokenUserDto!);

    return ApiResponse.successHandle<UserResponse>(refreshToken);
  }

  async resetpassword(dto: ResetPasswordUserDto) {
    const [error, resetPasswordUserDto] = ResetPasswordUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const newPassword = await new ResetPasswordUseCase(
      this.authRepository
    ).execute(resetPasswordUserDto!);

    return ApiResponse.successHandle<{ token: string }>(newPassword);
  }
}
