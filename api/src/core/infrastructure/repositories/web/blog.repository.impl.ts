import { BlogDataSource } from '@domain/datasources';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { BlogRepository } from '@domain/repositories/web';

export class BlogRepositoryImpl implements BlogRepository {
  constructor(private readonly blogDataSource: BlogDataSource) {}
  create(blogDto: BlogDto): Promise<BlogEntity> {
    return this.blogDataSource.create(blogDto);
  }
  getBlogs(): Promise<BlogEntity[]> {
    return this.blogDataSource.getBlogs();
  }
}
