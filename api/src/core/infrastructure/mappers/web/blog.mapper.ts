import { date } from '@common/adapter';
import { BlogEntity } from '@domain/entities/web/user.entity';

export class BlogMapper {
  static toEntity(blogDto: Record<string, any>): BlogEntity {
    const { title, author, content, imgUrl, createdAt, id } = blogDto;

    if ([!title, !author, !content].includes(true))
      throw new Error('Title, author and content are required');

    return new BlogEntity(
      id,
      title,
      author,
      content,
      imgUrl,
      date.DMY(createdAt)
    );
  }
}
