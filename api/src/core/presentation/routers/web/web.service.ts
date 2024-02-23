import { BlogDto } from '@domain/dtos/web/blog.dto';
import { BlogRepository } from '@domain/repositories/web';
import { ApiResponse } from '@domain/rules';
import { Catch } from '@common/decorators';
import { CreateBlogUseCase, GetAllBlogsUseCase } from '@domain/use-cases';
import { BlogEntity } from '@domain/entities/web/user.entity';
import { DeleteBlogDto, UpdateBlogDto } from '@domain/dtos';
import { UpdateBlogUseCase } from '@domain/use-cases/web/update-blog.use-case';
import { DeleteBlogUseCase } from '@domain/use-cases/web/delete-blog.use-case';
@Catch
export class WebService {
  constructor(private readonly blogRepository: BlogRepository) {}

  private errorHandle<T>(state: number, error: T) {
    return ApiResponse.errorHandle(state, error);
  }

  async create(dto: BlogDto) {
    const [error, blogDto] = BlogDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new CreateBlogUseCase(this.blogRepository).execute(
      blogDto!
    );

    if (!result) return this.errorHandle(400, 'Error creating blog');

    return ApiResponse.successHandle<BlogEntity>(result);
  }

  async getBlogs() {
    const result = await new GetAllBlogsUseCase(this.blogRepository).execute();

    if (!result) return this.errorHandle(404, 'No blogs found');

    return ApiResponse.successHandle<BlogEntity[]>(result);
  }

  async update(dto: UpdateBlogDto) {
    console.log('updateBlogDto', dto);
    const [error, updateBlogDto] = UpdateBlogDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new UpdateBlogUseCase(this.blogRepository).execute(
      updateBlogDto!
    );

    if (!result) return this.errorHandle(400, 'Error creating blog');

    return ApiResponse.successHandle<BlogEntity>(result);
  }

  async delete(dto: DeleteBlogDto) {
    console.log('deleteBlogDto', dto);
    const [error, deleteBlogDto] = DeleteBlogDto.create(dto);

    if (error) return this.errorHandle(400, error);

    const result = await new DeleteBlogUseCase(this.blogRepository).execute(
      deleteBlogDto!
    );

    if (!result) return this.errorHandle(400, 'Error creating blog');

    return ApiResponse.successHandle<boolean>(result);
  }
}
