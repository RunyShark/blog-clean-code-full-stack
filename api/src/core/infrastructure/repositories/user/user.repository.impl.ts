import { UserDataSource } from '../../../../core/domain/datasources/user';
import { DeleteUserDto, UpdateUserDto } from '../../../../core/domain/dtos';
import { UserUpdateEntity } from '../../../../core/domain/entities';
import { UserRepository } from '../../../../core/domain/repositories/user/user.repository';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}

  update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity> {
    return this.userDataSource.update(updateUserDto);
  }
  delete(deleteUserDto: DeleteUserDto): Promise<boolean> {
    return this.userDataSource.delete(deleteUserDto);
  }
}
