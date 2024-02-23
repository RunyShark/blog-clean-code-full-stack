import { GenericUseCase } from '../interface';
import { BlogRepository } from '@domain/repositories';
import { DeleteBlogDto } from '@domain/dtos';

export class DeleteBlogUseCase
  implements GenericUseCase<DeleteBlogDto, boolean>
{
  constructor(private readonly blogRepository: BlogRepository) {}

  async execute(deleteBlogDto: DeleteBlogDto): Promise<boolean> {
    return await this.blogRepository.deleteBlog(deleteBlogDto);
  }
}
