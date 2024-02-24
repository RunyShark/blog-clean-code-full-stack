import { UpdateBlogDto } from '../../dtos';
import { BlogEntity } from '../../entities';
import { BlogRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class UpdateBlogUseCase
  implements GenericUseCase<UpdateBlogDto, BlogEntity>
{
  constructor(private readonly blogRepository: BlogRepository) {}

  async execute(updateBlogDto: UpdateBlogDto): Promise<BlogEntity> {
    return await this.blogRepository.updateBlog(updateBlogDto);
  }
}
