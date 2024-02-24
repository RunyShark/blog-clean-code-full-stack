import { UpdateUserDto, DeleteUserDto } from '../../dtos';
import { UserUpdateEntity } from '../../entities';

export abstract class UserDataSource {
  abstract update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity>;
  abstract delete(deleteUserDto: DeleteUserDto): Promise<boolean>;
}
