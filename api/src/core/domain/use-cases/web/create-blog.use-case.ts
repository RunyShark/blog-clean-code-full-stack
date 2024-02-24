import { BlogDto } from '../../dtos';
import { BlogEntity } from '../../entities';
import { BlogRepository } from '../../repositories';
import { GenericUseCase } from '../interface';

export class CreateBlogUseCase implements GenericUseCase<BlogDto, BlogEntity> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(blogDto: BlogDto): Promise<BlogEntity> {
    return await this.blogRepository.create(blogDto);
  }
}
