/* eslint-disable @typescript-eslint/no-explicit-any */

import { BlogEntity } from '../../../domain/entities';

export class BlogMapper {
  static toEntity(blogDto: Record<string, any>): BlogEntity {
    const {
      title,
      author,
      content,
      imgUrl,
      dateOfPublication,
      id,
      photoAuthor,
    } = blogDto;

    if ([!title, !author, !content].includes(true))
      throw new Error('Title, author and content are required');

    return {
      id,
      title,
      author,
      content,
      imgUrl,
      dateOfPublication,
      photoAuthor,
    };
  }
}
