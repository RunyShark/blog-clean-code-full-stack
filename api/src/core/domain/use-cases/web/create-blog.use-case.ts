import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { GenericUseCase } from '../interface';
import { BlogRepository } from '@domain/repositories/web';

export class CreateBlogUseCase implements GenericUseCase<BlogDto, BlogEntity> {
  constructor(private readonly blogRepository: BlogRepository) {}
  async execute(blogDto: BlogDto): Promise<BlogEntity> {
    return await this.blogRepository.create(blogDto);
  }
}
