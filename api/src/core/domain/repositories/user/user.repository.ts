import { DeleteUserDto, UpdateUserDto } from '@domain/dtos';
import { UserUpdateEntity } from '@domain/entities';

export abstract class UserRepository {
  abstract update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<boolean>;
}
