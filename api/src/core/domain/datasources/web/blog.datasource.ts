import { BlogDto } from '@domain/dtos/web/blog.dto';
import { DeleteBlogDto } from '@domain/dtos/web/delete.blog.dto';
import { UpdateBlogDto } from '@domain/dtos/web/update.blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';

export abstract class BlogDataSource {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract getBlogs(): Promise<BlogEntity[]>;
  abstract updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity>;
  abstract deleteBlog(deleteBlogDto: DeleteBlogDto): Promise<boolean>;
}
