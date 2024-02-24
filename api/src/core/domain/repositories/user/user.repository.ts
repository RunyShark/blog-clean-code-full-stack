import { UpdateUserDto, DeleteUserDto } from '../../dtos';
import { UserUpdateEntity } from '../../entities';

export abstract class UserRepository {
  abstract update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<boolean>;
}
