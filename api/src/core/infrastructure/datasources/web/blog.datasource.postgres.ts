import { prisma } from '@common/config';
import { BlogDataSource } from '@domain/datasources';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { BlogMapper } from '@infrastructure/mappers';

export class BlogDataSourcePostgres implements BlogDataSource {
  constructor(private readonly db: typeof prisma) {}

  async create(blogDto: BlogDto): Promise<BlogEntity> {
    return BlogMapper.toEntity([]);
  }

  async getBlogs(): Promise<BlogEntity[]> {
    return [].map(BlogMapper.toEntity);
  }
}
