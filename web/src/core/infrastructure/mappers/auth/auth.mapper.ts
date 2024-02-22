/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserEntity } from '../../../domain/entities';
import { CustomError } from '../../../domain/errors/custom.error';

export class AuthMapper {
  static toEntity(blogDto: Record<string, any>): UserEntity {
    const { id, email, password, accountActive, profile, blog } = blogDto;

    if (!profile) throw CustomError.internal('Error creating account');

    const { firstName, lastName } = profile;

    if (
      [!id, !email, !firstName, !lastName, !password, !!accountActive].includes(
        true
      )
    )
      throw CustomError.internal('Error creating account');

    return {
      id,
      email,
      password,
      accountActive,
      profile: {
        firstName,
        lastName,
        photo: profile.photo,
      },
      blog,
    };
  }
}
