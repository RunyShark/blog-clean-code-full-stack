import { EncryptAdapterDomain } from '@common/adapter';
import { prisma } from '@common/config';
import { UserDataSource } from '@domain/datasources/user';
import { UpdateUserDto, DeleteUserDto } from '@domain/dtos';
import { UserUpdateEntity } from '@domain/entities';
import { CustomError } from '@domain/errors/custom.error';
import { UserMapper } from '@infrastructure/mappers';

export class UserDataSourcePostgres implements UserDataSource {
  constructor(
    private readonly db: typeof prisma,
    private readonly hash: EncryptAdapterDomain
  ) {}

  private userExist(userId: string) {
    return this.db.user.findUnique({
      where: { id: userId },
    });
  }

  async update(updateUserDto: UpdateUserDto): Promise<UserUpdateEntity> {
    const userExist = await this.userExist(updateUserDto.userId);

    if (!userExist) throw CustomError.notFound('User not found');

    const updateUser = await this.db.user.update({
      where: { id: updateUserDto.userId },
      data: {
        email: updateUserDto?.email,
        password: this.hash.encrypt(
          updateUserDto?.password || userExist.password
        ),
        profile: {
          update: {
            firstName: updateUserDto.profile?.firstName,
            lastName: updateUserDto.profile?.lastName,
            photo: updateUserDto.profile?.photo,
          },
        },
      },
      include: {
        profile: {
          select: {
            firstName: true,
            lastName: true,
            photo: true,
          },
        },
        blog: true,
      },
    });

    return UserMapper.toEntity(updateUser);
  }

  async delete(deleteUserDto: DeleteUserDto): Promise<boolean> {
    const userExist = await this.userExist(deleteUserDto.userId);

    if (!userExist) throw CustomError.notFound('User not found');

    const deleteUser = await this.db.user.delete({
      where: { id: deleteUserDto.userId },
    });

    if (!deleteUser) throw CustomError.internal('Error deleting user');

    return !!deleteUser;
  }
}
