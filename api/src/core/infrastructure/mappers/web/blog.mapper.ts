import { date } from '../../../../common/adapter/date/date.adapter';
import { BlogEntity } from '../../../../core/domain/entities';

export class BlogMapper {
  static toEntity(blogDto: Record<string, any>): BlogEntity {
    const { title, author, content, imgUrl, createdAt, id, user } = blogDto;

    if ([!title, !author, !content, !user].includes(true))
      throw new Error('Title, author and content are required');

    return new BlogEntity(
      id,
      title,
      author,
      content,
      imgUrl,
      date.DMY(createdAt),
      user.profile.photo
    );
  }
}
