import { UpdateUserDto, DeleteUserDto } from '@domain/dtos';

import { UserUpdateEntity } from '@domain/entities';

export abstract class UserDataSource {
  abstract update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<boolean>;
}
