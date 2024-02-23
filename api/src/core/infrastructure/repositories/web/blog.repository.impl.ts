import { BlogDataSource } from '@domain/datasources';
import { UpdateBlogDto, DeleteBlogDto } from '@domain/dtos';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { BlogRepository } from '@domain/repositories/web';

export class BlogRepositoryImpl implements BlogRepository {
  constructor(private readonly blogDataSource: BlogDataSource) {}

  updateBlog(updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    return this.blogDataSource.updateBlog(updateBlogDto);
  }

  deleteBlog(deleteBlogDto: DeleteBlogDto): Promise<boolean> {
    return this.blogDataSource.deleteBlog(deleteBlogDto);
  }

  create(blogDto: BlogDto): Promise<BlogEntity> {
    return this.blogDataSource.create(blogDto);
  }
  getBlogs(): Promise<BlogEntity[]> {
    return this.blogDataSource.getBlogs();
  }
}
