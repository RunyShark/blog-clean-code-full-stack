import { prisma } from '@common/config';
import { BlogDataSource } from '@domain/datasources';
import { UpdateBlogDto, DeleteBlogDto } from '@domain/dtos';
import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { CustomError } from '@domain/errors/custom.error';
import { BlogMapper } from '@infrastructure/mappers';

export class BlogDataSourcePostgres implements BlogDataSource {
  constructor(private readonly db: typeof prisma) {}

  private existsBlog(blogId: string): Promise<boolean> {
    return this.db.blog
      .count({ where: { id: blogId } })
      .then((count) => count > 0);
  }

  async updateBlog({
    title,
    content,
    imgUrl,
    blogId,
  }: UpdateBlogDto): Promise<BlogEntity> {
    const blogExists = await this.existsBlog(blogId);

    if (!blogExists) throw CustomError.notFound('Blog not found');

    const updateBlog = await this.db.blog.update({
      where: { id: blogId },
      data: { title, content, imgUrl },
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

    return BlogMapper.toEntity(updateBlog);
  }

  async deleteBlog({ blogId }: DeleteBlogDto): Promise<boolean> {
    const blogExists = await this.existsBlog(blogId);

    if (!blogExists) throw CustomError.notFound('Blog not found');

    const deleteBlog = await this.db.blog.delete({
      where: { id: blogId },
    });

    return !!deleteBlog;
  }

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
