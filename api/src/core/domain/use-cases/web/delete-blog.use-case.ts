import { DeleteBlogDto } from '../../dtos';
import { BlogRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class DeleteBlogUseCase
  implements GenericUseCase<DeleteBlogDto, boolean>
{
  constructor(private readonly blogRepository: BlogRepository) {}

  async execute(deleteBlogDto: DeleteBlogDto): Promise<boolean> {
    return await this.blogRepository.deleteBlog(deleteBlogDto);
  }
}
