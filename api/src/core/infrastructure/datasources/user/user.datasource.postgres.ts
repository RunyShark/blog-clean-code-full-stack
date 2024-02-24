import { prisma } from '../../../../common/config';
import { UserDataSource } from '../../../../core/domain/datasources/user';
import { UpdateUserDto, DeleteUserDto } from '../../../../core/domain/dtos';
import { UserUpdateEntity } from '../../../../core/domain/entities';
import { CustomError } from '../../../../core/domain/errors/custom.error';
import { EncryptAdapterDomain } from '../../../../common/adapter/encrypt/encrypt.adapter.domain';
import { UserMapper } from '../../mappers/user/user.mapper';

export class UserDataSourcePostgres implements UserDataSource {
  constructor(
    private readonly db: typeof prisma,
    private readonly hash: EncryptAdapterDomain
  ) {}

  private userExist(userId: string) {
    return this.db.user.findFirst({
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

    await prisma.blog.deleteMany({
      where: { userId: deleteUserDto.userId },
    });

    await prisma.profile.deleteMany({
      where: { userId: deleteUserDto.userId },
    });

    const deleteUser = await this.db.user.delete({
      where: { id: deleteUserDto.userId },
    });

    if (!deleteUser) throw CustomError.internal('Error deleting user');

    return !!deleteUser;
  }
}
