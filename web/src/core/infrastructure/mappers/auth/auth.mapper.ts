/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEntity } from '../../../domain/entities';
import { CustomError } from '../../../domain/errors/custom.error';

export class AuthMapper {
  static toEntity(blogDto: Record<string, any>): UserEntity {
    const { data } = blogDto;

    if (!data) throw CustomError.internal('Data not found');
    const { token, account } = data;

    if (!token) throw CustomError.internal('Token not found');

    if (!account) throw CustomError.internal('Account not found');

    return {
      token,
      account,
    };
  }
}
