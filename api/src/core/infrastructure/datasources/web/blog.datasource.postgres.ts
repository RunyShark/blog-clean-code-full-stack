import { prisma } from '@common/config';
import { BlogDataSource } from '@domain/datasources';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { CustomError } from '@domain/errors/custom.error';
import { BlogMapper } from '@infrastructure/mappers';

export class BlogDataSourcePostgres implements BlogDataSource {
  constructor(private readonly db: typeof prisma) {}

  async create(blogDto: BlogDto): Promise<BlogEntity> {
    const blog = await this.db.blog.create({
      data: blogDto,
      include: {
        user: {
          select: {
            profile: {
              select: { photo: true },
            },
          },
        },
      },
    });

    if (!blog) throw CustomError.badRequest('Error creating blog');

    return BlogMapper.toEntity(blog);
  }

  async getBlogs(): Promise<BlogEntity[]> {
    const blogs = await this.db.blog.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: {
            profile: {
              select: { photo: true },
            },
          },
        },
      },
    });

    return blogs.map(BlogMapper.toEntity);
  }
}
