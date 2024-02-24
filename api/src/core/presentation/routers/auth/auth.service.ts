import { Catch } from '../../../../common/decorators/Catch.decorator';
import {
  CreateUserDto,
  LoginUserDto,
  RefreshTokenUserDto,
  ResetPasswordUserDto,
} from '../../../../core/domain/dtos';
import { AuthRepository } from '../../../../core/domain/repositories';
import { ApiResponse } from '../../../../core/domain/rules';
import {
  CreateUserUseCase,
  LoginUserUseCase,
  RefreshTokenUseCase,
  ResetPasswordUseCase,
} from '../../../../core/domain/use-cases';
import { UserResponse } from '../../../../core/domain/use-cases/interface';

@Catch
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

    if (!result) return this.errorHandle(400, 'Error login');

    return ApiResponse.successHandle<UserResponse>(result);
  }

  async register(dto: CreateUserDto) {
    const [error, createUserDto] = CreateUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const newAccount = await new CreateUserUseCase(this.authRepository).execute(
      createUserDto!
    );

    if (!newAccount) return this.errorHandle(400, 'Error register');

    return ApiResponse.successHandle<UserResponse>(newAccount);
  }

  async refreshToken(dto: RefreshTokenUserDto) {
    const [error, refreshTokenUserDto] = RefreshTokenUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const refreshToken = await new RefreshTokenUseCase(
      this.authRepository
    ).execute(refreshTokenUserDto!);

    if (!refreshToken) return this.errorHandle(400, 'Error refreshToken');

    return ApiResponse.successHandle<UserResponse>(refreshToken);
  }

  async resetpassword(dto: ResetPasswordUserDto) {
    const [error, resetPasswordUserDto] = ResetPasswordUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const newPassword = await new ResetPasswordUseCase(
      this.authRepository
    ).execute(resetPasswordUserDto!);

    if (!newPassword) return this.errorHandle(400, 'Error resetpassword');

    return ApiResponse.successHandle<{ token: string }>(newPassword);
  }
}
