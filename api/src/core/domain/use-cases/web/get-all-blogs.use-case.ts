import { BlogEntity } from '../../entities';
import { BlogRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class GetAllBlogsUseCase implements GenericUseCase<{}, BlogEntity[]> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(): Promise<BlogEntity[]> {
    return await this.blogRepository.getBlogs();
  }
}
