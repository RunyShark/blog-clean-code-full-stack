import { Catch } from '../../../../common/decorators/Catch.decorator';
import { DeleteUserDto, UpdateUserDto } from '../../../../core/domain/dtos';
import { UserRepository } from '../../../../core/domain/repositories';
import { ApiResponse } from '../../../../core/domain/rules';
import {
  DeleteUserUseCase,
  UpdateUserUseCase,
} from '../../../../core/domain/use-cases';
import { UserResponse } from '../../../../core/domain/use-cases/interface';

@Catch
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  private errorHandle<T>(state: number, error: T) {
    return ApiResponse.errorHandle(state, error);
  }

  async update(dto: UpdateUserDto) {
    const [error, updateUserDto] = UpdateUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new UpdateUserUseCase(this.userRepository).execute(
      updateUserDto!
    );

    if (!result) return this.errorHandle(400, 'update error');

    return ApiResponse.successHandle<UserResponse>(result);
  }

  async delete(dto: DeleteUserDto) {
    const [error, deleteUserDto] = DeleteUserDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new DeleteUserUseCase(this.userRepository).execute(
      deleteUserDto!
    );

    if (!result) return this.errorHandle(400, 'update error');

    return ApiResponse.successHandle<boolean>(result);
  }
}
