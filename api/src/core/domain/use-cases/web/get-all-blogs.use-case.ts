import { BlogEntity } from '@domain/entities/web/user.entity';
import { GenericUseCase } from '../interface';
import { BlogRepository } from '@domain/repositories/web';

export class GetAllBlogsUseCase implements GenericUseCase<{}, BlogEntity[]> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(): Promise<BlogEntity[]> {
    return await this.blogRepository.getBlogs();
  }
}
