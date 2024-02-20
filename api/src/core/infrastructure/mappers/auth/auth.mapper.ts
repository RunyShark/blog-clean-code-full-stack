import { UserEntity } from '@domain/entities';
import { BlogEntity } from '@domain/entities/web/user.entity';

export class AuthMapper {
  static toEntity(blogDto: Record<string, any>): UserEntity {
    const { title, author, content, imgUrl, createdAt, id } = blogDto;

    if ([!title, !author, !content].includes(true))
      throw new Error('Title, author and content are required');

    return new UserEntity(
      ' public id: string,',
      '  public email: string,',
      '  public password: string,',
      {
        firstNames: 'string;',
        lastNames: 'string;',
        photo: ' string;',
      },
      {
        title: ' string;',
        author: ' string;',
        content: ' string;',
        imgUrl: 'string;',
        dateOfPublication: 'tring;',
      }
    );
  }
}
