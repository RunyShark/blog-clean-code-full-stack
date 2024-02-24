import { BlogDataSource } from '../../../../core/domain/datasources';
import {
  BlogDto,
  DeleteBlogDto,
  UpdateBlogDto,
} from '../../../../core/domain/dtos';
import { BlogEntity } from '../../../../core/domain/entities';
import { BlogRepository } from '../../../../core/domain/repositories';

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
