import { UserDataSource } from '@domain/datasources/user';
import { UpdateUserDto, DeleteUserDto } from '@domain/dtos';
import { UserUpdateEntity } from '@domain/entities';

import { UserRepository } from '@domain/repositories';

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDataSource: UserDataSource) {}

  update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity> {
    return this.userDataSource.update(updateUserDto);
  }
  delete(deleteUserDto: DeleteUserDto): Promise<boolean> {
    return this.userDataSource.delete(deleteUserDto);
  }
}
