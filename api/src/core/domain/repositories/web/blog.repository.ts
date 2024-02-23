import { DeleteBlogDto, UpdateBlogDto } from '@domain/dtos';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';

export abstract class BlogRepository {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract getBlogs(): Promise<BlogEntity[]>;
  abstract updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity>;
  abstract deleteBlog(deleteBlogDto: DeleteBlogDto): Promise<boolean>;
}
