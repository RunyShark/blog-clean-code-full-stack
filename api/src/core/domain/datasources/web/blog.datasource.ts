import { BlogDto, UpdateBlogDto, DeleteBlogDto } from '../../dtos';
import { BlogEntity } from '../../entities';

export abstract class BlogDataSource {
  abstract create(blogDto: BlogDto): Promise<BlogEntity>;
  abstract getBlogs(): Promise<BlogEntity[]>;
  abstract updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity>;
  abstract deleteBlog(deleteBlogDto: DeleteBlogDto): Promise<boolean>;
}
