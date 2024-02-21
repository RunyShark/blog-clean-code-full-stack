import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogRepository } from '@domain/repositories/web';
import { ApiResponse } from '@domain/rules';

export class WebService {
  constructor(private readonly blogRepository: BlogRepository) {}
  async create(blogDto: BlogDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }

  async getBlogs() {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }
}
