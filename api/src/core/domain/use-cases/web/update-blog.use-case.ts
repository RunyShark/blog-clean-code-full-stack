import { GenericUseCase } from '../interface';
import { BlogRepository } from '@domain/repositories';
import { BlogEntity } from '@domain/entities';
import { UpdateBlogDto } from '@domain/dtos';

export class UpdateBlogUseCase
  implements GenericUseCase<UpdateBlogDto, BlogEntity>
{
  constructor(private readonly blogRepository: BlogRepository) {}

  async execute(updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    return await this.blogRepository.updateBlog(updateBlogDto);
  }
}
