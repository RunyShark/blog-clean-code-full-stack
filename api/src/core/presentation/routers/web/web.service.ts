import { BlogDto } from '@domain/dtos/web/blog.dto';
import { ApiResponse } from '@domain/rules';
import { Request, Response } from 'express';

export class WebService {
  async create(blogDto: BlogDto) {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }

  async getBlogs() {
    return ApiResponse.successHandle<{ test: string }>({ test: 'string' });
  }
}
